const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')
const transactionService = require('../../services/transaction.service')
const pushService = require('../../services/pushNotification.service')
const pushNotificationService = require('../../services/pushNotification.service')

const getTransactionType = (data) => {
    return {
        SEND_MESSAGE : {
            channel : "sendMessage",
            sendPush : true,
        },
        READ_MESSAGE : {
            channel : "readMessage",
            sendPush : false
        },
        REGISTER_SPAM : {
            channel : "registerSpam",
            sendPush : false
        },
        DEREGISTER_SPAM: {
            channel : "deregisterSpam",
            sendPush : false
        },
        ADD_FRIEND: {
            channel : "addFriend",
            sendPush : true
        }
    }[data]
}

const sendTransactionResult = catchAsync(async (req, res) => {
    //todo :: transaction 체크해서 redis 에 set
    let data = req.body
    let transactionType = getTransactionType(req.body.type);
    if(req.body.transactionResult.data[0] === "blockchain timeout" || req.body.transactionResult.data[0] === 'reject') {
        await transactionService.setSendFailTransaction(data.from, req.body.type, req.body.transactionObject)
    }else{
        if(transactionType.sendPush){
            redisClient.saddAsync("connectedUser"+ data.to, data.to)
            redisClient.sinterAsync('connectedUser', "connectedUser" + data.to)
                .then(async (res)=>{
                    if(res.length!==0){
                        req.app.io.to(data.to).emit(transactionType.channel+"Receive", transactionResult)
                    }
                    else{
                        await pushNotificationService.sendPushNotification({}, [data.to], data.type)
                    }
                }).catch((err)=>{
                throw err;
            })
        }
    }
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    req.app.io.to(req.body.from).emit(transactionType.channel + "Result", transactionResult)
    res.send("ok")
});

const getSendFailTransactions = catchAsync(async (req, res) => {
    redisClient.hgetallAsync(req.address)
        .then((data)=>{
            res.send(data)
        })
});


module.exports = {
    sendTransactionResult,
    getSendFailTransactions
};

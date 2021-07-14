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
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    if(transactionType.sendPush) {
        const targetUser = [data.to]
        let connectedUsers = await checkUserConnectionStatus(targetUser)
        let pushUsers = [data.to].filter(x => !connectedUsers.includes(x))
        if (!pushUsers) {
            req.app.io.to(...targetUser).emit("log", transactionType.channel + "Receive")
            req.app.io.to(...targetUser).emit(transactionType.channel + "Receive", transactionResult)
        } else {
            await pushNotificationService.sendPushNotification({}, pushUsers, data.type)
        }
    }
    console.log(transactionType.channel + " : result sent to : " + req.body.from);
    req.app.io.to(req.body.from).emit(transactionType.channel + "Result", transactionResult)
    //todo :: 개발 후 delete
    req.app.io.to(req.body.from).emit("log", transactionType.channel + "Result")
    res.send("ok")
});

//todo :: util로 빼는 편이 좋아 보여요. -> message 등 모든 로직에 포함
const checkUserConnectionStatus = (targetUsers) => {
    return new Promise(async (resolve, reject) => {
        try{
            await redisClient.saddAsync("connectedUser"+ targetUsers[0], ...targetUsers)
            await redisClient.sinterAsync('connectedUser', "connectedUser" + targetUsers[0])
                .then(async(res)=> {
                    if(res.length!==0){
                        resolve(res);
                    }else{
                        resolve(targetUsers);
                    }
                }).catch((err)=>{
                    reject(err)
                })
            await redisClient.delAsync("connectedUser"+ targetUsers[0])
        }catch(err){
            reject(err)
        }
    })
}

const getSendFailTransactions = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const getSendFailTransactionsStatus = await transactionService.getSendFailTransactions(data);
    res.json(getSendFailTransactionsStatus)
});

const deleteSendFailTransactions = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const deleteSendFailTransactionsStatus = await transactionService.deleteSendFailTransactions(data);
    res.json(deleteSendFailTransactionsStatus)
});

const getNonceByAddress = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const getNonceByAddressStatus = await transactionService.getNonceByAddress(data);
    res.json(getNonceByAddressStatus)
});


module.exports = {
    sendTransactionResult,
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress
};

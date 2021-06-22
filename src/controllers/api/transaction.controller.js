const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')
const transactionService = require('../../services/transaction.service')
const pushNotificationService = require('../../services/pushNotification.service')

const sendTransactionResult = catchAsync(async (req, res) => {
    //todo :: transaction 체크해서 redis 에 set
    let data = req.body
    console.log(data)
    if(req.body.transactionResult.data[0] === "blockchain timeout" || req.body.transactionResult.data[0] === 'reject') {
        await transactionService.setSendFailTransaction(data.from, req.body.type, req.body.transactionObject)
    }else{
        await pushNotificationService.sendPushNotification({}, [req.body.to], req.body.type)
    }
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    req.app.io.to(req.body.from).emit(req.body.type+"Result", transactionResult)
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

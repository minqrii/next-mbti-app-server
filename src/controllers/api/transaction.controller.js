const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')
const transactionService = require('../../services/transaction.service')

const sendTransactionResult = catchAsync(async (req, res) => {
    let data = req.body
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    if(data.to){
        req.app.io.to(data.to).emit("log", data.type + "Receive")
        req.app.io.to(data.to).emit(data.type + "Receive", transactionResult)
    }
    console.log(data.type + " : result sent to : " + req.body.from);
    req.app.io.to(req.body.from).emit(data.type + "Result", transactionResult)
    req.app.io.to(req.body.from).emit("log", data.type + "Result")
    res.send("ok")
});


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

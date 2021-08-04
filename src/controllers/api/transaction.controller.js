const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const transactionService = require('../../services/transaction.service')

const sendTransactionResult = catchAsync(async (req, res) => {
    const data = req.body
    let transactionResult = {
        "status" : data.transactionResult.data[0],
        "tx_hash" : data.tx_hash
    }
    if(data.to){
        req.app.io.to(data.to).emit(data.type + "Receive", transactionResult)
    }
    req.app.io.to(data.from).emit(data.type + "Result", transactionResult)
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

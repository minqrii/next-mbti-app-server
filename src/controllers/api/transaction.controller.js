const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const transactionService = require('../../services/transaction.service')

const sendTransactionResult = catchAsync(async (req, res) => {
    const data = req.body
    let transactionResult = {
        "status" : data.transactionResult,
        "tx_hash" : data.tx_hash,
        "networkId" : data.networkId
    }
    if(data.to){
        req.app.io.to(`${data.serviceName}_${data.to}`).emit(data.type + "Receive", transactionResult)
    }
    req.app.io.to(`${data.serviceName}_${data.from}`).emit(data.type + "Result", transactionResult)
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

const getContractAddresses = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const contractAddresses = await transactionService.getContractAddresses(data);
    res.json(contractAddresses)
});

module.exports = {
    sendTransactionResult,
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress,
    getContractAddresses
};

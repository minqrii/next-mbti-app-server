const redisClient = require('../../config/database/redis')
const config = require('../../config/config')
const {transactionService} = require('../../services')
const socketCatchAsync = require('../../utils/socketCatchAsync')



const getSendFailTransactions = socketCatchAsync(async(io, socket, data, callback) => {
    let sendFailTransactions = await transactionService.getSendFailTransactions(data);
    callback(sendFailTransactions)
});

const deleteSendFailTransactions = socketCatchAsync(async(io, socket, data, callback) => {
    let deleteSendFailResult = await transactionService.deleteSendFailTransactions(data);
    callback(deleteSendFailResult)
});

const getNonceByAddress = socketCatchAsync(async(io, socket, data, callback) => {
    let nonce = await transactionService.getNonceByAddress(data);
    callback(nonce)
});


module.exports = {
    deleteSendFailTransactions,
    getSendFailTransactions,
    getNonceByAddress,
};

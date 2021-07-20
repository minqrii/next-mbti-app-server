const redisClient = require('../../config/database/redis')
const config = require('../../config/config')
const {transactionService} = require('../../services')
const socketCatchAsync = require('../../utils/socketCatchAsync')



const getSendFailTransactions = socketCatchAsync(async(io, socket, data) => {
    let sendFailTransactions = await transactionService.getSendFailTransactions(data);
    socket.emit('getSendFailTransactions', sendFailTransactions);
    //:todo 개발 후 delete
    socket.emit('log', 'getSendFailTransactions')
});

const deleteSendFailTransactions = socketCatchAsync(async(io, socket, data) => {
    let deleteSendFailResult = await transactionService.deleteSendFailTransactions(data);
    socket.emit('deleteSendFailTransactions', deleteSendFailResult);
    //:todo 개발 후 delete
    socket.emit('log', 'deleteSendFailTransactions')
});

const getNonceByAddress = socketCatchAsync(async(io, socket, data) => {
    let nonce = await transactionService.getNonceByAddress(data);
    socket.emit('getNonceByAddress', nonce);
    //:todo 개발 후 delete
    socket.emit('log', 'getNonceByAddress')
});


module.exports = {
    deleteSendFailTransactions,
    getSendFailTransactions,
    getNonceByAddress,
};

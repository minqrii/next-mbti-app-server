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
    redisClient.hgetAsync("send_fail_" + data.address, data.type)
        .then(async (data)=>{
            let sendFailObject = JSON.parse(data[0])
            if(data !== null){
                sendFailObject.delete(data.tx_hash);
                await redisClient.hsetAsync("send_fail_" + data.address, data.type, sendFailObject)
            }
            io.emit("deleteSendFailTransactions", sendFailObject)
            //todo :: 개발 후 delete
            socket.emit("log",'deleteSendFailTransactions')
        })
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

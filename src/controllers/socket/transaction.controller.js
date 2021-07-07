const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const socketCatchAsync = require('../../utils/socketCatchAsync')



const getSendFailTransactions = socketCatchAsync(async(io, socket, data) => {
    redisClient.hgetallAsync("send_fail_" + data.address)
        .then((data)=>{
            let result = {};
            if(data !== null){
                Object.entries(data).forEach(([key,value]) => {
                    result[key] = JSON.parse(value)
                })
            }
            io.emit("getSendFailTransactions",result)
            //todo :: 개발 후 delete
            socket.emit("log",'getSendFailTransactions')
        })
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

module.exports = {
    deleteSendFailTransactions
};

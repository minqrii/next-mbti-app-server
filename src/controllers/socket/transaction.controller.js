const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const socketCatchAsync = require('../../utils/socketCatchAsync')



const getSendFailTransactions = socketCatchAsync(async(io, socket, data) => {
    redisClient.hgetallAsync(data.address)
        .then((data)=>{
            io.emit("getSendFailTransactions",data)
        })
});

module.exports = {
    getSendFailTransactions
};

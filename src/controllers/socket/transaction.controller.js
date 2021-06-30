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
        })
});

module.exports = {
    getSendFailTransactions
};

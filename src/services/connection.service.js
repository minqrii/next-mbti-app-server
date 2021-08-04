const redisClient = require('../config/database/redis')

const getConnectionByAddress = async(address) => {
    await redisClient.saddAsync("connectedUser"+ address, address)
    const res = await redisClient.sinterAsync('connectedUser', "connectedUser" + address)
    await redisClient.delAsync("connectedUser"+ address)
    return (res.length !== 0)
}



module.exports = {
    getConnectionByAddress
}

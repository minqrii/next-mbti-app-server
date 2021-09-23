const redisClient = require('../config/database/redis')

const getConnectionByAddress = async(address, serviceName) => {
    const connectedUserKey = makeConnectedUserKey(serviceName, address)
    await redisClient.saddAsync(connectedUserKey, address)
    const res = await redisClient.sinterAsync(`${serviceName}_connectedUsers`, connectedUserKey)
    await redisClient.delAsync(connectedUserKey)
    return (res.length !== 0)
}
const makeConnectedUserKey = (serviceName, address) => {
    return `${serviceName}_connectedUser_${address}`
}


module.exports = {
    getConnectionByAddress
}

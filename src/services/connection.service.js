const redisClient = require('../config/database/redis')

const getConnectionByAddress = (address) => {
    return new Promise(async (resolve, reject) => {
        try{
            await redisClient.saddAsync("connectedUser"+ address, address)
            await redisClient.sinterAsync('connectedUser', "connectedUser" + address)
                .then(async(res)=> {
                    console.log(res)
                    if(res.length!==0){
                        resolve(true);
                        return;
                    }
                    resolve(false);
                })
            await redisClient.delAsync("connectedUser"+ address)
        }catch(err){
            reject(err)
        }
    })
}



module.exports = {
    getConnectionByAddress
}

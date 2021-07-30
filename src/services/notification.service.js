const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');
const moment = require('moment')

const getNotificationsByTimestamp = async function (data) {
    try {
        return await getNotifications(data.address, data.whisperTimestamp, data.walletTimestamp)
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getNotifications = async function(address, whisperTimestamp, walletTimestamp){
    whisperTimestamp ??= moment().subtract(7, 'day').unix() * 1000
    walletTimestamp ??= moment().subtract(7, 'day').unix() * 1000
    let promiseArray = [whisperTimestamp, walletTimestamp].map(async (timestamp, index) =>
        index === 0 ? Promise.resolve(await whisperAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}`)) :
            Promise.resolve(await walletAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}`))
    )
    // promiseArray.push(new Promise(async (resolve, reject) => {
    //     try{
    //         const notifications = await whisperAppServer.get(`/v1/notifications/${address}?timestamp=${whisperTimestamp}`)
    //         resolve({whisperNotifications : notifications.data})
    //     }catch(err){
    //         reject(err)
    //     }
    // }))
    // promiseArray.push(new Promise(async (resolve, reject) => {
    //     try{
    //         const notifications = await walletAppServer.get(`/v1/notifications/${address}?timestamp=${walletTimestamp}`)
    //         resolve({walletNotifications : notifications.data})
    //     }catch(err){
    //         reject(err)
    //     }
    // }))
    return new Promise((resolve, reject)=>{
        Promise.all(promiseArray)
            .then((result=>{
                resolve (result)
            })).catch((err)=>{
                reject (err)
        })
    })
}

module.exports = {
    getNotificationsByTimestamp
}


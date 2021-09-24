const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');
const moment = require('moment');
const {makeQueryFromArray} = require("../config/query");

const getNotificationsByTimestamp = async function (data) {
    try {
        return await getNotifications(data.address, data.serviceName, data.server, data.networkId, data.timestamp)
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

//todo::수정 (하나는 eqt, 하나는 weth)
const getNotifications = async function(address, serviceName, server, networkId, timestamp){
    // whisperTimestamp = (whisperTimestamp) ? whisperTimestamp : moment().subtract(7, 'day').unix() * 1000
    // walletTimestamp = (walletTimestamp) ? walletTimestamp : moment().subtract(7, 'day').unix() * 1000
    // let promiseArray = [whisperTimestamp, walletTimestamp].map(async (timestamp, index) =>
    //     index === 0 ? Promise.resolve(await whisperAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}`).then((result)=> result.data)) :
    //         Promise.resolve(await walletAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}`).then((result)=>result.data))
    // )
    // return await Promise.all(promiseArray)
    //     .then(result => result)
    //     .catch((err) => {throw (err)})
    timestamp = (timestamp) ? timestamp : moment().subtract(7, 'day').unix() * 1000;

    switch (server) {
        case "WHISPER":
            return whisperAppServer.get(`/v1/notification/${address}?serviceName=${serviceName}&${makeQueryFromArray("networkId", networkId)}&timestamp=${timestamp}`);
        case "WALLET":
            return walletAppServer.get(`/v1/notification/${address}?serviceName=${serviceName}&${makeQueryFromArray("networkId", networkId)}&timestamp=${timestamp}`);
    }
}

const getMessageNotification = async function(data) {
    const timestamp = (data.timestamp) ? data.timestamp : moment().subtract(7, 'day').unix() * 1000;
    const getMessageNotificationResponse = whisperAppServer.get(`/v1/notifications/message/${data.address}?serviceName=${data.serviceName}&${makeQueryFromArray("networkId", data.networkId)}&timestamp=${timestamp}`);
    return getMessageNotificationResponse.data
}
const getTokenNotification = async function(data) {
    const timestamp = (data.timestamp) ? data.timestamp : moment().subtract(7, 'day').unix() * 1000;
    const getTokenNotificationResponse = walletAppServer.get(`/v1/notifications/token/${data.address}?serviceName=${data.serviceName}&${makeQueryFromArray("networkId", data.networkId)}&timestamp=${timestamp}`);
    return getTokenNotificationResponse.data
}
const getEscrowNotification = async function(data) {
    const timestamp = (data.timestamp) ? data.timestamp : moment().subtract(7, 'day').unix() * 1000;
    const getEscrowNotificationResponse = walletAppServer.get(`/v1/notifications/escrow/${data.address}?serviceName=${data.serviceName}&${makeQueryFromArray("networkId", data.networkId)}&timestamp=${timestamp}`);
    return getEscrowNotificationResponse.data
}


module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
}


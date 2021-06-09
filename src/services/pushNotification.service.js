const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const alarmAppServer = require('../utils/appServer');


const sendPush = async function (data, targetAddress, type) {
    try {
        data["type"] = type
        data["targetAddress"] = targetAddress
        const sendPushStatus = await alarmAppServer.post(`/v1/push/send`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const syncPushNotificationCount = async function (toAddress, data){
    try {
        data["type"] = type
        data["targetAddress"] = targetAddress
        const sendPushStatus = await alarmAppServer.post(`/v1/push/send`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const registerPushNotificationToken = async function (toAddress, data){
    try {
        data["type"] = type
        data["targetAddress"] = targetAddress
        const sendPushStatus = await alarmAppServer.post(`/v1/push/send`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const deregisterPushNotificationToken = async function (toAddress, data){
    try {
        data["type"] = type
        data["targetAddress"] = targetAddress
        const sendPushStatus = await alarmAppServer.post(`/v1/push/send`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const makePushDataFromTransaction = function (toAddress, data){
    return {
        key : toAddress,
    }
}

module.exports = {
    sendPush,
    syncPushNotificationCount,
    makePushDataFromTransaction,
    registerPushNotificationToken,
    deregisterPushNotificationToken
};

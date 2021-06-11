const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const alarmAppServer = require('../utils/walletAppServer');


const sendPushNotification = async function (data, targetAddress, type) {
    try {
        data["type"] = type
        data["key"] = targetAddress
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/send`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const syncPushNotificationCount = async function (data){
    try {
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/key/${data.key}/count`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const registerPushNotificationToken = async function (data){
    try {
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/${data.token}/key/${data.key}`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const deregisterPushNotificationToken = async function (data){
    try {
        const sendPushStatus = await alarmAppServer.delete(`/v1/push-notification/${data.token}/key/${data.key}`, data);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

module.exports = {
    sendPushNotification,
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const alarmAppServer = require('../utils/alarmAppServer');


const sendPushNotification = async function (data, targetAddress, type) {
    try {
        console.log(type)
        console.log(targetAddress)
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
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/key/${data.key}/count`, {count : data.count});
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

const registerPushType = async function(data){
    try{
        const registerPushTypeStatus = await alarmAppServer.post(`/v1/push-notification/${data.token}/key/${data.key}/type?type=${data.type}`)
        return registerPushTypeStatus.data
    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const deregisterPushType = async function(data){
    try{
        const deregisterPushTypeStatus = await alarmAppServer.delete(`/v1/push-notification/${data.token}/key/${data.key}/type?type=${data.type}`)
        return deregisterPushTypeStatus.data
    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}


module.exports = {
    sendPushNotification,
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType
};

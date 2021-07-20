const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const alarmAppServer = require('../utils/alarmAppServer');


const syncPushNotificationCount = async function (data){
    try {
        const body = (({key, ...obj})=> obj) (data)
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/key/${data.key}/count`, body);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const registerPushNotificationToken = async function (data){
    try {
        const body = (({token, key, ...obj})=> obj) (data)
        const sendPushStatus = await alarmAppServer.post(`/v1/push-notification/${data.token}/key/${data.key}`, body);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const deregisterPushNotificationToken = async function (data){
    try {
        const sendPushStatus = await alarmAppServer.delete(`/v1/push-notification/${data.token}/key/${data.key}?serviceName=${data.serviceName}`);
        return sendPushStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const registerPushType = async function(data){
    try{
        const body = (({token, key, ...obj})=> obj) (data)
        const registerPushTypeStatus = await alarmAppServer.post(`/v1/push-notification/${data.token}/key/${data.key}/type`, body)
        return registerPushTypeStatus.data
    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const deregisterPushType = async function(data){
    try{
        const deregisterPushTypeStatus = await alarmAppServer.delete(`/v1/push-notification/${data.token}/key/${data.key}/type?type=${data.type}&serviceName=${data.serviceName}`)
        return deregisterPushTypeStatus.data
    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const getPushSound = async function(data){
    try{

    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const updatePushSound = async function(data){
    try{

    }catch (err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}


module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType,
    getPushSound,
    updatePushSound
};

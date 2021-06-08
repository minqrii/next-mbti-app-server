const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/appServer');
const alarmAppServer = require('../utils/appServer');


const sendFcm = async function (data, targetAddress, type) {
    try {
        data["type"] = type
        data["targetAddress"] = targetAddress
        const sendFcmStatus = await alarmAppServer.post(`/v1/fcm/send`, data);
        return sendFcmStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    sendFcm
};

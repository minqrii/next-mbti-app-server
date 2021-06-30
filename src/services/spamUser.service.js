const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');

const registerSpamUser = async function (data) {
    try {
        const registerSpamStatus = await whisperAppServer.post(`/v1/spam-users/register`,data);
        return registerSpamStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const deregisterSpamUser = async function (data) {
    try {
        const deregisterSpamStatus = await whisperAppServer.post(`/v1/spam-users/deregister`,data);
        return deregisterSpamStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getSpamUsers = async function (data) {
    try {
        const spamUsers = await whisperAppServer.get(`/v1/spam-users/${data.address}`);
        return spamUsers.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};


module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers
};

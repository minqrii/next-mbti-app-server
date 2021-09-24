const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');

const sendMessage = async function (data) {
    try {
        const sendMessageStatus = await whisperAppServer.post(`/v1/messages/send`,data);
        return sendMessageStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const readMessage = async function (data) {
    try {
        const readMessageStatus = await whisperAppServer.post(`/v1/messages/read`,data);
        return readMessageStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getMessageCount = async function (data) {
    try {
        const messageCount = await whisperAppServer.get(`/v1/messages/${data.address}/count?networkId=${data.networkId}&contractAddress=${data.contractAddress}&serviceName=${data.serviceName}`);
        return messageCount.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getMessagesByAddress = async function (data) {
    try {
        const messageData = await whisperAppServer.get(`/v1/messages/${data.toAddress}/address/${data.fromAddress}?networkId=${data.networkId}&contractAddress=${data.contractAddress}&serviceName=${data.serviceName}`);
        return messageData.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};


module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress
};

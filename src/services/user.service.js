const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');

const registerSpamUser = async function (data) {
    try {
        const registerSpamStatus = await whisperAppServer.post(`/v1/users/spam/register`,data);
        return registerSpamStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const deregisterSpamUser = async function (data) {
    try {
        const deregisterSpamStatus = await whisperAppServer.post(`/v1/users/spam/deregister`,data);
        return deregisterSpamStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getSpamUsers = async function (data) {
    try {
        const spamUsers = await whisperAppServer.get(`/v1/users/${data.address}/spam?networkId=${data.networkId}&contractAddressQuery=${data.contractAddressQuery}&serviceName=${data.serviceName}`);
        return spamUsers.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const exportUserFriends = async function (data){
    try{
        const exportUserFriendsResponse = await whisperAppServer.post(`/v1/users/friends`, data)
        return exportUserFriendsResponse.data
    }
    catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const importUserFriends = async function (data){
    try{
        const importUserFriendsResponse = await whisperAppServer.get(`/v1/users/friends?userId=${data.userId}`)
        return importUserFriendsResponse.data
    }
    catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}


module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

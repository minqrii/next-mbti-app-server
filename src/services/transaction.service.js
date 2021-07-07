const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const redisClient = require('../config/database/redis')

const setSendFailTransaction = async function (from, type, transactionObject) {
    try {
        redisClient.hmgetAsync("send_fail_" + from, type)
            .then((result) => {
                let sendFailObject = {};
                sendFailObject[transactionObject.tx_hash] = transactionObject
                if (result[0] !== null) {
                    //이미 send fail이 존재하는 경우
                    sendFailObject = {...sendFailObject, ...JSON.parse(result[0])};
                }
                redisClient.hmsetAsync("send_fail_" + from, type, JSON.stringify(sendFailObject))
                //todo :: add expire time to key
            })
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    setSendFailTransaction
};

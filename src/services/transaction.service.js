const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const redisClient = require('../config/database/redis')

const setSendFailTransaction = async function (from, type, transactionObject) {
    try {
        redisClient.hmgetAsync("send_fail_" + from, type)
            .then((result) => {
                console.log(JSON.parse(result[0]))
                let stringifyTransaction = [];
                let sendFailObject = {};
                sendFailObject[transactionObject.tx_hash] = transactionObject
                if (result[0] !== null) {
                    //이미 send fail이 존재하는 경우
                    stringifyTransaction = JSON.parse(result[0]);
                    stringifyTransaction.push(sendFailObject);
                } else {
                    //send fail이 한개도 없는 경우
                    stringifyTransaction.push(sendFailObject);
                }
                redisClient.hmsetAsync("send_fail_" + from, type, JSON.stringify(stringifyTransaction))
                //todo :: add expire time to key
            })
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    setSendFailTransaction
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const redisClient = require('../config/database/redis')

const setSendFailTransaction = async function (from, type, transactionObject) {
    try {
        redisClient.hmgetAsync("send_fail_" + from, type)
            .then((result) => {
                let stringifyTransaction = [];
                if (result[0] !== null) {
                    //이미 send fail이 존재하는 경우
                    stringifyTransaction.push(JSON.parse(result[0]));
                    stringifyTransaction.push(transactionObject);
                    stringifyTransaction = JSON.stringify(stringifyTransaction)
                    redisClient.hmsetAsync("send_fail_" + from, type, stringifyTransaction)
                } else {
                    //send fail이 한개도 없는 경우
                    stringifyTransaction = JSON.stringify([transactionObject])
                    redisClient.hmsetAsync("send_fail_" + from, type, stringifyTransaction)
                }
            })
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    setSendFailTransaction
};

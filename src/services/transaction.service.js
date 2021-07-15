const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const redisClient = require('../config/database/redis')
const whisperAppServer = require('../utils/whisperAppServer')
const walletAppServer = require('../utils/walletAppServer')

// const setSendFailTransaction = async function (from, type, transactionObject) {
//     try {
//         redisClient.hmgetAsync("send_fail_" + from, type)
//             .then((result) => {
//                 let sendFailObject = {};
//                 sendFailObject[transactionObject.tx_hash] = transactionObject
//                 if (result[0] !== null) {
//                     //이미 send fail이 존재하는 경우
//                     sendFailObject = {...sendFailObject, ...JSON.parse(result[0])};
//                 }
//                 redisClient.hmsetAsync("send_fail_" + from, type, JSON.stringify(sendFailObject))
//                 //todo :: add expire time to key
//             })
//     } catch (err) {
//         throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
//     }
// };

const getSendFailTransactions = async function (data){
    try {
        let getSendFailTransactionResult;
        let path = `/v1/transactions/fail?address=${data.address}&type=${data.type}`
        switch (data.type){
            case 'SEND_TOKEN':
                getSendFailTransactionResult = await walletAppServer.get(path)
                break;
            case 'ALL' :
                //todo :: change after wallet server
                // await Promise.all([walletAppServer.get(path), whisperAppServer.get(path)])
                //     .then((result)=>{
                //         getSendFailTransactionResult = result;
                //     })
                await Promise.all([whisperAppServer.get(path)])
                    .then((res)=>{
                        let result = {};
                        res.map(key => Object.assign(result, key.data))
                        getSendFailTransactionResult = result;
                    })
                break;
            default :
                getSendFailTransactionResult = await whisperAppServer.get(path)
                break;
        }
        return getSendFailTransactionResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const deleteSendFailTransactions = async function (data){
    try {
        let deleteSendFailTransactionResult;
        let path = `/v1/transactions/fail?address=${data.address}&type=${data.type}&tx_hash=${data.tx_hash}`
        switch (data.type){
            case 'SEND_TOKEN':
                deleteSendFailTransactionResult = await walletAppServer.delete(path)
                break;
            default :
                deleteSendFailTransactionResult = await whisperAppServer.delete(path)
                break;
        }
        return deleteSendFailTransactionResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const getNonceByAddress = async function (data){
    try {
        let getNonceResult;
        let path = `/v1/transactions/nonce?address=${data.address}`
        switch (data.server){
            case 'wallet':
                getNonceResult = await walletAppServer.get(path)
                break;
            default :
                getNonceResult = await whisperAppServer.get(path)
                break;
        }
        return getNonceResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

module.exports = {
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress
    // setSendFailTransaction
};

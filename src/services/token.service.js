const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const walletAppServer = require('../utils/walletAppServer');

const sendToken = async function (data) {
    try {
        const sendTokenStatusResult = await walletAppServer.post(`/v1/tokens/send`,data);
        return sendTokenStatusResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

//todo: get 수정
const getTokensBalance = async function (data) {
    try {
        let query = '';
        for(let i=0; i < data.contractAddresses.length; i++){
            query += `&contractAddresses[${i}]=` + data.contractAddresses[i];
        }

        const getTokensBalanceResponse = await walletAppServer.get(`/v1/tokens/balance?address=${data.address}` + query);
        return getTokensBalanceResponse.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
    }
};
//todo: get 수정
const getTokenTransactionsByContractAddress = async function (data) {
    try {
        const transactionsResult = await walletAppServer.get(`/v1/tokens/transactions?address=${data.address}&count=${data.count}&timestamp=${data.timestamp}&contractAddress=${data.contractAddress}`);
        return transactionsResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenTransactionsByContractAddress,
};

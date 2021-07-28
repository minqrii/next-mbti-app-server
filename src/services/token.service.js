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

const getTokensBalance = async function (data) {
    try {
        const getTokensBalanceResponse = await walletAppServer.get(`/v1/tokens/balance?address=${data.address}`);
        return getTokensBalanceResponse.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getTokenBalanceByTokenName = async function (data) {
    try {
        const tokenBalanceResult = await walletAppServer.get(`/v1/tokens/${data.tokenName}/balance?address=${data.address}`);
        return tokenBalanceResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getTokenTransactionsByTokenName = async function (data) {
    try {
        const transactionsResult = await walletAppServer.get(`/v1/tokens/${data.tokenName}/transactions?address=${data.address}&page=${data.page}&count=${data.count}&timestamp=${data.timestamp}`);
        return transactionsResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenBalanceByTokenName,
    getTokenTransactionsByTokenName,
};

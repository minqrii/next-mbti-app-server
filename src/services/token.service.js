const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const walletAppServer = require('../utils/walletAppServer');
const {makeQuery} = require('../config/query');

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
        const query = makeQuery(data.contractAddresses)

        const getTokensBalanceResponse = await walletAppServer.get(`/v1/tokens/balance?address=${data.address}` + query);
        return getTokensBalanceResponse.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
    }
};

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

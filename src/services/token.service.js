const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const walletAppServer = require('../utils/walletAppServer');
//todo :: service로 빼기
const {makeQueryFromArray} = require('../config/query');

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
        //todo :: service로 빼기
        const query = await makeQueryFromArray('contractAddresses', data.contractAddresses)
        const getTokensBalanceResponse = await walletAppServer.get(`/v1/tokens/balance?address=${data.address}&networkId=${data.networkId}&serviceName=${data.serviceName}&` + query);
        return getTokensBalanceResponse.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
    }
};

const getTokenTransactionsByContractAddress = async function (data) {
    try {
        const transactionsResult = await walletAppServer.get(`/v1/tokens/transactions?address=${data.address}&count=${data.count}&timestamp=${data.timestamp}&contractAddress=${data.contractAddress}&networkId=${data.networkId}&contractAddressQuery=${data.contractAddressQuery}&serviceName=${data.serviceName}`);
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

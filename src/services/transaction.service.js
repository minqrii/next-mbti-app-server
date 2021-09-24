const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer')
const walletAppServer = require('../utils/walletAppServer')
const networkAppServer = require('../utils/networkAppServer')
const {makeQueryFromArray} = require('../config/query');

const getSendFailTransactions = async function (data){
    try {
        let getSendFailTransactionResult = {};
        let path = `/v1/transactions/fail?address=${data.address}&type=${data.type}`
        if(data.networkId){
            path = path + '&networkId=' + data.networkId
        }
        switch (data.type){
            case 'SEND_TOKEN':
                getSendFailTransactionResult = await walletAppServer.get(path)
                break;
            case 'ALL' :
                await Promise.all([whisperAppServer.get(path)])
                    .then((res)=>{
                        let result = {};
                        res.map(key => Object.assign(result, key.data))
                        getSendFailTransactionResult.data = result;
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
        const path = `/v1/transactions/fail?address=${data.address}&type=${data.type}&tx_hash=${data.tx_hash}&networkId=${data.networkId}`
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
        const serviceNameQuery = `&serviceName=${data.serviceName}`
        const path = `/v1/transactions/nonce?address=${data.address}&networkId=${data.networkId}`
        switch (data.tag){
            case 'MESSENGER':
                getNonceResult = await whisperAppServer.get(path + serviceNameQuery)
                break;
            case 'WALLET':
                getNonceResult = await walletAppServer.get(path + serviceNameQuery)
                break;
            case 'NFT':
                //todo:: 추가 필요
                break;
        }
        return getNonceResult.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}

const getContractAddressesByNetworkId = async function (data){
    const networkIdArray = data.networkId

    const query = await makeQueryFromArray('networkId', networkIdArray)

    const getContractAddressesResponse = await networkAppServer.get(`/v1/contract-address/networks/${data.serviceName}?${query}`);

    return getContractAddressesResponse.data;
}

module.exports = {
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress,
    // setSendFailTransaction,
    getContractAddressesByNetworkId,

};

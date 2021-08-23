const socketCatchAsync = require('../../utils/socketCatchAsync')
const {tokenService} = require('../../services/index')

const sendToken = socketCatchAsync(async(io, socket, data, callback)=>{
    const sendTokenStatus = await tokenService.sendToken(data);
    callback(sendTokenStatus)
})

const getTokensBalance = socketCatchAsync(async(io, socket, data, callback)=>{
    const balance = await tokenService.getTokensBalance(data);
    callback(balance)
})

const getTokenTransactionsByContractAddress = socketCatchAsync(async(io, socket, data, callback)=>{
    const transactions = await tokenService.getTokenTransactionsByContractAddress(data);
    callback(transactions)
})

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenTransactionsByContractAddress
};

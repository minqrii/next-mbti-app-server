const socketCatchAsync = require('../../utils/socketCatchAsync')
const {tokenService} = require('../../services/index')

const sendToken = socketCatchAsync(async(io, socket, data, callback)=>{
    const sendTokenStatus = await tokenService.sendToken(data);
    callback(sendTokenStatus)
    //todo :: 개발 후 delete
})

const getTokensBalance = socketCatchAsync(async(io, socket, data, callback)=>{
    const balance = await tokenService.getTokensBalance(data);
    callback(balance)
})

const getTokenBalanceByTokenName = socketCatchAsync(async(io, socket, data, callback)=>{
    const tokenBalance = await tokenService.getTokenBalanceByTokenName(data);
    callback(tokenBalance)
    //todo :: 개발 후 delete
})

const getTokenTransactionsByTokenName = socketCatchAsync(async(io, socket, data, callback)=>{
    const transactions = await tokenService.getTokenTransactionsByTokenName(data);
    callback(transactions)
    //todo :: 개발 후 delete
})

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenBalanceByTokenName,
    getTokenTransactionsByTokenName
};

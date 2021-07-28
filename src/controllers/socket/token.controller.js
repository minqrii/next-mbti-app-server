const socketCatchAsync = require('../../utils/socketCatchAsync')
const {tokenService} = require('../../services/index')

const sendToken = socketCatchAsync(async(io, socket, data)=>{
    const sendTokenStatus = await tokenService.sendToken(data);
    socket.emit('sendTokenStatus', sendTokenStatus)
    //todo :: 개발 후 delete
    socket.emit("log",'sendTokenStatus')
})

const getTokensBalance = socketCatchAsync(async(io, socket, data, callback)=>{
    const balance = await tokenService.getTokensBalance(data);
    callback(balance)
})

const getTokenBalanceByTokenName = socketCatchAsync(async(io, socket, data)=>{
    const tokenBalance = await tokenService.getTokenBalanceByTokenName(data);
    socket.emit('tokenBalance', tokenBalance)
    //todo :: 개발 후 delete
    socket.emit("log",'tokenBalance')
})

const getTokenTransactionsByTokenName = socketCatchAsync(async(io, socket, data)=>{
    const transactions = await tokenService.getTokenTransactionsByTokenName(data);
    socket.emit('transactions', transactions)
    //todo :: 개발 후 delete
    socket.emit("log",'transactions')
})

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenBalanceByTokenName,
    getTokenTransactionsByTokenName
};

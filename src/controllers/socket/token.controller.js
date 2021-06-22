const socketCatchAsync = require('../../utils/socketCatchAsync')
const {tokenService} = require('../../services/index')

const sendToken = socketCatchAsync(async(io, socket, data)=>{
    const sendTokenStatus = await tokenService.sendToken(data);
    socket.emit('sendTokenStatus', sendTokenStatus)
})

const getAllTokenBalance = socketCatchAsync(async(io, socket, data)=>{
    const balance = await tokenService.getAllTokenBalance(data);
    socket.emit('getAllTokenBalance', balance)
})

const getTokenBalanceByTokenName = socketCatchAsync(async(io, socket, data)=>{
    const tokenBalance = await tokenService.getTokenBalanceByTokenName(data);
    socket.emit('tokenBalance', tokenBalance)
})

const getTokenTransactionsByTokenName = socketCatchAsync(async(io, socket, data)=>{
    const transactions = await tokenService.getTokenTransactionsByTokenName(data);
    socket.emit('transactions', transactions)
})

module.exports = {
    sendToken,
    getAllTokenBalance,
    getTokenBalanceByTokenName,
    getTokenTransactionsByTokenName
};
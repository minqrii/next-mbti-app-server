const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {tokenService} = require('../../services');

const sendToken = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const sendTokenStatus = await tokenService.sendToken(data);
    res.send(sendTokenStatus)
})

const getTokensBalance = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const balance = await tokenService.getTokensBalance(data);
    res.send(balance)
})

const getTokenBalanceByContractAddress = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const tokenBalance = await tokenService.getTokenBalanceByContractAddress(data);
    res.send(tokenBalance)
})

const getTokenTransactionsByTokenName = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const transactions = await tokenService.getTokenTransactionsByTokenName(data);
    res.send(transactions)
})

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenBalanceByContractAddress,
    getTokenTransactionsByTokenName
};

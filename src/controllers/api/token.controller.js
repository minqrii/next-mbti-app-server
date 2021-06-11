const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {tokenService} = require('../../services');

const sendToken = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const sendTokenStatus = await tokenService.sendToken(data);
    res.send(sendTokenStatus)
})

const getAllTokenBalance = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const balance = await tokenService.getAllTokenBalance(data);
    res.send(balance)
})

const getTokenBalanceByTokenName = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const tokenBalance = await tokenService.getTokenBalanceByTokenName(data);
    res.send(tokenBalance)
})

const getTokenTransactionsByTokenName = catchAsync(async(req,res)=>{
    const data = {...req.body, ...req.query, ...req.params}
    const transactions = await tokenService.getTokenTransactionsByTokenName(data);
    res.send(transactions)
})

module.exports = {
    sendToken,
    getAllTokenBalance,
    getTokenBalanceByTokenName,
    getTokenTransactionsByTokenName
};

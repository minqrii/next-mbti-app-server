const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload

const getTokensBalance = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    networkId : joi.number().required()
});

const getTokenBalanceByTokenName = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    tokenName : joi.string().required(),
    networkId : joi.number().required()
});

const getTokenTransactionsByTokenName = joi.object().keys({
    count : joi.number().required(),
    timestamp : joi.number(),
    address : joi.string().required().custom(customValidation.address),
    tokenName : joi.string().required(),
    networkId : joi.number().required()
});

module.exports = {
    sendToken,
    getTokenBalanceByTokenName,
    getTokensBalance,
    getTokenTransactionsByTokenName
};

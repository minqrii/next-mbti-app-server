const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload;

const getTokensBalance = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

const getTokenBalanceByTokenName = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    }),
    params : joi.object().keys({
        tokenName : joi.string().required()
    })
}

const getTokenTransactionsByTokenName = {
    query : joi.object().keys({
        page : joi.number().required(),
        count : joi.number().required(),
        timestamp : joi.number(),
        address : joi.string().required().custom(customValidation.address)
    }),
    params : joi.object().keys({
        tokenName : joi.string().required()
    })
}


module.exports = {
    sendToken,
    getTokenBalanceByTokenName,
    getTokensBalance,
    getTokenTransactionsByTokenName
};

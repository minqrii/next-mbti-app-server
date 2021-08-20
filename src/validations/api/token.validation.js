const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload;

//todo: get 수정
const getTokensBalance = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        contractAddresses : joi.array().required()
    })
}

const getTokenTransactionsByTokenName = {
    query : joi.object().keys({
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
    getTokensBalance,
    getTokenTransactionsByTokenName
};

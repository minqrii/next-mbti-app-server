const joi = require('joi');
const customValidation = require('./custom.validation')

const transactionPayload = {
    body :joi.object().keys({
        transaction : joi.string().required(),
        tx_hash : joi.string().required(),
        pub_key : joi.string().required(),
        signature : joi.string().required()
    })
}

const sendTransactionResult = {
    body : joi.object().keys({
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        transactionResult : joi.object().required(),
        from : joi.string().required().custom(customValidation.address),
        transactionObject : joi.object(),
        to : joi.string().required().custom(customValidation.address)
    })
}

const getSendFailTransactions = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

module.exports = {
    transactionPayload,
    sendTransactionResult
}
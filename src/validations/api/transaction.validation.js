const joi = require('joi');
const customValidation = require('./custom.validation')

const transactionPayload = {
    body : joi.object().keys({
        transaction :  joi.object().keys({
            transaction : joi.string().required(),
            tx_hash : joi.string().required(),
            pub_key : joi.string().required(),
            signature : joi.string().required()
        }),
        networkId : joi.number().required()
    })
}

const sendTransactionResult = {
    body : joi.object().keys({
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        transactionResult : joi.object().required(),
        from : joi.string().required().custom(customValidation.address),
        transactionObject : joi.object(),
        to : joi.string().custom(customValidation.address),
        networkId : joi.string().required()
    })
}

const getSendFailTransactions = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        type : joi.string().required(),
        networkId : joi.string().required()
    })
}

const deleteSendFailTransactions = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        networkId : joi.string().required()
    })
}

const getNonceByAddress = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        server : joi.string().required().valid('whisper', 'wallet'),
        networkId : joi.string().required()
    })
}

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    sendTransactionResult,
    deleteSendFailTransactions,
    getNonceByAddress
}

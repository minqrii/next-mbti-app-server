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
        networkId : joi.number().required(),
        contractAddressQuery : joi.string()
    })
}

const sendTransactionResult = {
    body : joi.object().keys({
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        transactionResult : joi.object().required(),
        networkId : joi.number().required(),
        from : joi.string().required().custom(customValidation.address),
        transactionObject : joi.object(),
        to : joi.string().custom(customValidation.address)
    })
}

const getSendFailTransactions = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        type : joi.string().required(),
        networkId : joi.number().required()
    })
}

const deleteSendFailTransactions = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        networkId : joi.number().required()
    })
}

const getNonceByAddress = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        server : joi.string().required().valid('whisper', 'wallet'),
        networkId : joi.number().required()
    })
}

const getContractAddresses = {
    query : joi.object().keys({
        server : joi.string().required().valid('whisper', 'wallet', 'all'),
        serviceName : joi.string().required()
    })
}

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    sendTransactionResult,
    deleteSendFailTransactions,
    getNonceByAddress,
    getContractAddresses
}

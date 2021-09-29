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
        networkId : joi.string().required(),
        serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
        contractAddressQuery : joi.string(),
        recipient : joi.string().custom(customValidation.address),
    })
}

const sendTransactionResult = {
    body : joi.object().keys({
        serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
        tx_hash : joi.string().required(),
        type : joi.string().required(),
        transactionResult : joi.string().required(),
        networkId : joi.string().required(),
        from : joi.string().required().custom(customValidation.address),
        transactionObject : joi.object(),
        to : joi.string().custom(customValidation.address)
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
        tag : joi.string().required().valid('MESSENGER', 'WALLET', 'NFT'),
        networkId : joi.string().required(),
        serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT')
    })
}

const getContractAddressesByNetworkId = {
    query : joi.object().keys({
        serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
        networkId : joi.array().required()
    })
}

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    sendTransactionResult,
    deleteSendFailTransactions,
    getNonceByAddress,
    getContractAddressesByNetworkId
}

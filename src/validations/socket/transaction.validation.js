const joi = require('joi');
const customValidation = require('./custom.validation')

const transactionPayload = joi.object().keys({
    transaction :  joi.object().keys({
        transaction : joi.string().required(),
        tx_hash : joi.string().required(),
        pub_key : joi.string().required(),
        signature : joi.string().required()
    }),
    networkId : joi.string().required(),
    contractAddressQuery : joi.string(),
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    recipient : joi.string().custom(customValidation.address),
});

const getSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    type : joi.string().required(),
    networkId : joi.string().required()
})

const deleteSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    tx_hash : joi.string().required(),
    type : joi.string().required(),
    networkId : joi.string().required()
})

const getNonceByAddress = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    tag : joi.string().required().valid('MESSENGER', 'WALLET', 'NFT'),
    networkId : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT')
})

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress
}

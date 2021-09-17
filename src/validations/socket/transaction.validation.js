const joi = require('joi');
const customValidation = require('./custom.validation')

const transactionPayload = joi.object().keys({
    transaction :  joi.object().keys({
        transaction : joi.string().required(),
        tx_hash : joi.string().required(),
        pub_key : joi.string().required(),
        signature : joi.string().required()
    }),
    networkId : joi.number().required(),
    contractAddressQuery : joi.string(),
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT')
});

const getSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    type : joi.string().required(),
    networkId : joi.number().required()
})

const deleteSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    tx_hash : joi.string().required(),
    type : joi.string().required(),
    networkId : joi.number().required()
})

const getNonceByAddress = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    server : joi.string().required().valid('whisper', 'wallet'),
    networkId : joi.number().required()
})

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    deleteSendFailTransactions,
    getNonceByAddress
}

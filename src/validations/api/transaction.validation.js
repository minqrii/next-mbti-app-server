const joi = require('joi');

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
        from : joi.string().required()
    })
}

module.exports = {
    transactionPayload,
    sendTransactionResult
}
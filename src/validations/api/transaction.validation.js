const joi = require('joi');

const transactionPayload = {
    body :joi.object().keys({
        transaction : joi.string().required(),
        tx_hash : joi.string().required(),
        pub_key : joi.string().required(),
        signature : joi.string().required()
    })
}

module.exports = {
    transactionPayload
}
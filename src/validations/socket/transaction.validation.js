const joi = require('joi');

const transactionPayload = joi.object().keys({
    transaction : joi.string().required(),
    tx_hash : joi.string().required(),
    pub_key : joi.string().required(),
    signature : joi.string().required()
});

const getSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    type : joi.string().required()
})

const deleteSendFailTransactions = joi.object().keys({
    address : joi.string().required(),
    tx_hash : joi.string().required(),
    type : joi.string().required()
})

module.exports = {
    transactionPayload,
    getSendFailTransactions,
    deleteSendFailTransactions
}

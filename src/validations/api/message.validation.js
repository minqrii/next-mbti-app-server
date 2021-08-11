const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation');

const sendMessage = transactionValidation.transactionPayload;

const readMessage = transactionValidation.transactionPayload;

const getMessageCount = {
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

const getMessagesByAddress = {
    params : joi.object().keys({
        fromAddress : joi.string().required().custom(customValidation.address),
        toAddress : joi.string().required().custom(customValidation.address)
    })
}

const getMessagesByTimestamp = {
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
        timestamp : joi.string().required()
    })
}

module.exports = {
    getMessageCount,
    getMessagesByAddress,
    sendMessage,
    readMessage,
    getMessagesByTimestamp
};


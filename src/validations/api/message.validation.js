const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation');

const sendMessage = transactionValidation.transactionPayload;

const readMessage = transactionValidation.transactionPayload;

const getMessageCount = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

const getMessagesByAddress = {
    query : joi.object().keys({
        fromAddress : joi.string().required().custom(customValidation.address),
        toAddress : joi.string().required().custom(customValidation.address)
    })
}

const getMessagesByTimestamp = {
    query : joi.object().keys({
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


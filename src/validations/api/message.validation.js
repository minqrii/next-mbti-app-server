const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation');

const sendMessage = transactionValidation.transactionPayload;

const readMessage = transactionValidation.transactionPayload;

const getMessageCount = {
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
    }),
    query : joi.object().keys({
        networkId : joi.string().required(),
        contractAddressQuery : joi.string().required(),
        serviceName : joi.string().required().valid('WHISPER')
    }),
}

const getMessagesByAddress = {
    params : joi.object().keys({
        fromAddress : joi.string().required().custom(customValidation.address),
        toAddress : joi.string().required().custom(customValidation.address),
    }),
    query : joi.object().keys({
        networkId : joi.string().required(),
        contractAddressQuery : joi.string().required(),
        serviceName : joi.string().required().valid('WHISPER')
    })
}


module.exports = {
    getMessageCount,
    getMessagesByAddress,
    sendMessage,
    readMessage
};


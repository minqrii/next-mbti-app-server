const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const getMessageCount = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    networkId : joi.string().required(),
    contractAddressQuery : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER')
});

const getMessagesByAddress = joi.object().keys({
    fromAddress : joi.string().required().custom(customValidation.address),
    toAddress : joi.string().required().custom(customValidation.address),
    networkId : joi.string().required(),
    contractAddressQuery : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER')
});

const sendMessage = transactionValidation.transactionPayload

const readMessage = transactionValidation.transactionPayload

module.exports = {
    getMessageCount,
    getMessagesByAddress,
    sendMessage,
    readMessage
};

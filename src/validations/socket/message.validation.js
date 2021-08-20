const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const getMessageCount = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    networkId : joi.number().required()
});

const getMessagesByAddress = joi.object().keys({
    fromAddress : joi.string().required().custom(customValidation.address),
    toAddress : joi.string().required().custom(customValidation.address),
    networkId : joi.number().required()
});

const sendMessage = transactionValidation.transactionPayload

const readMessage = transactionValidation.transactionPayload

module.exports = {
    getMessageCount,
    getMessagesByAddress,
    sendMessage,
    readMessage
};

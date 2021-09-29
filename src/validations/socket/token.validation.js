const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload

const getTokensBalance = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    contractAddressQuery : joi.array().required(),
    networkId : joi.string().required(),
    serviceName: joi.string().required().valid('WHISPER', 'SLUSH')
});

const getTokenTransactionsByContractAddress = joi.object().keys({
    count : joi.number().required(),
    timestamp : joi.number(),
    address : joi.string().required().custom(customValidation.address),
    contractAddressQueryData : joi.string().required(),
    contractAddressQuery : joi.string().required(),
    networkId : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH')
});

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenTransactionsByContractAddress
};

const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload;

const getTokensBalance = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    contractAddresses : joi.array().required()
});

const getTokenTransactionsByContractAddress = joi.object().keys({
    count : joi.number().required(),
    timestamp : joi.number(),
    address : joi.string().required().custom(customValidation.address),
    contractAddress : joi.string().required()
});

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenTransactionsByContractAddress
};

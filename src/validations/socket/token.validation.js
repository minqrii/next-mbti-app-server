const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const sendToken = transactionValidation.transactionPayload

const getTokensBalance = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    contractAddresses : joi.array().required(),
    networkId : joi.number().required()
});

const getTokenTransactionsByContractAddress = joi.object().keys({
    count : joi.number().required(),
    timestamp : joi.number(),
    address : joi.string().required().custom(customValidation.address),
    contractAddress : joi.string().required(),
    contractAddressQuery : joi.string().required(),
    networkId : joi.number().required()
});

module.exports = {
    sendToken,
    getTokensBalance,
    getTokenTransactionsByContractAddress
};

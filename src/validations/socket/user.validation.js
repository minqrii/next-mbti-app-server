const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation');

const registerSpamUser = transactionValidation.transactionPayload

const deregisterSpamUser = transactionValidation.transactionPayload

const getSpamUsers = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    networkId : joi.string().required(),
    contractAddressQuery : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER')
});

const exportUserFriends = joi.object().keys({
    userId : joi.string().required(),
    data : joi.string().required()
});

const importUserFriends = joi.object().keys({
    userId : joi.string().required()
});

module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

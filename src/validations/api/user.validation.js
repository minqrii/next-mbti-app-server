const joi = require('joi');
const customValidation = require('./custom.validation');
const transactionValidation = require('./transaction.validation')

const getSpamUsers = {
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address),
    }),
    query : joi.object().keys({
        networkId : joi.string().required(),
        contractAddressQuery : joi.string().required(),
        serviceName : joi.string().required().valid('WHISPER'),
    })
}

const exportUserFriends = {
    body : joi.object().keys({
        userId : joi.string().required(),
        data : joi.string().required()
    })
}

const importUserFriends = {
    query : joi.object().keys({
        userId : joi.string().required()
    })
}

const registerSpamUser = transactionValidation.transactionPayload;

const deregisterSpamUser = transactionValidation.transactionPayload;

module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

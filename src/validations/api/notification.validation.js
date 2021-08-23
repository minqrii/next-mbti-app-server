const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = {
    query : joi.object().keys({
        whisperTimestamp : joi.string(),
        walletTimestamp : joi.string(),
        contractAddresses: joi.array().required()
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

module.exports = {
    getNotificationsByTimestamp
};


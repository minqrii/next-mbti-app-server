const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = {
    query : joi.object().keys({
        whisperTimestamp : joi.string(),
        walletTimestamp : joi.string(),
        networkId : joi.number().required()
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

module.exports = {
    getNotificationsByTimestamp
};


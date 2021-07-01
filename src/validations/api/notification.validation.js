const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = {
    query : joi.object().keys({
        whisperTimestamp : joi.string().required(),
        walletTimestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

module.exports = {
    getNotificationsByTimestamp
};


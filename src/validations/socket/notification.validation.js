const joi = require('joi');
const customValidation = require('./custom.validation');

const getMessageNotification = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER'),
    networkId: joi.array().required(),
    timestamp : joi.string().required(),
    address : joi.string().required().custom(customValidation.address)
});

const getTokenNotification = joi.object().keys({
    serviceName : joi.string().required().valid('SLUSH', 'WHISPER'),
    networkId: joi.array().required(),
    timestamp : joi.string().required(),
    address : joi.string().required().custom(customValidation.address)
});

const getEscrowNotification = joi.object().keys({
    serviceName : joi.string().required().valid('SLUSH'),
    networkId: joi.array().required(),
    timestamp : joi.string().required(),
    address : joi.string().required().custom(customValidation.address)
});

module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
};

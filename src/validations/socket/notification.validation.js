const joi = require('joi');
const customValidation = require('./custom.validation');

const getMessageNotification = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER'),
    networkId: joi.array().required(),
    timestamp : joi.string().required(),
    address : joi.string().required().custom(customValidation.address)
});

const getTokenNotification = getMessageNotification;

const getEscrowNotification = getMessageNotification;

module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
};

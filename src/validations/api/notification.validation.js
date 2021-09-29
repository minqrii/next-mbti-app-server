const joi = require('joi');
const customValidation = require('./custom.validation');

const getMessageNotification = {
    query : joi.object().keys({
        serviceName : joi.string().required().valid('WHISPER'),
        networkId: joi.array().required(),
        timestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
};

const getTokenNotification = {
    query : joi.object().keys({
        serviceName : joi.string().required().valid('WHISPER', 'SLUSH'),
        networkId: joi.array().required(),
        timestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
};

const getEscrowNotification = {
    query : joi.object().keys({
        serviceName : joi.string().required().valid('SLUSH'),
        networkId: joi.array().required(),
        timestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
};

module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
};

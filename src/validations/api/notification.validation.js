const joi = require('joi');
const customValidation = require('./custom.validation');

const getMessageNotification = {
    query : joi.object().keys({
        serviceName : joi.string().required(),
        networkId: joi.array().required(),
        timestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
};

const getTokenNotification = getMessageNotification;

const getEscrowNotification = getMessageNotification;

module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
};

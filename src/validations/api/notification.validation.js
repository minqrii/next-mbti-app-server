const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = {
    query : joi.object().keys({
        serviceName : joi.string().required(),
        server : joi.string().required(),
        networkId: joi.array().required(),
        timestamp : joi.string().required(),
    }),
    params : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    })
}

module.exports = {
    getNotificationsByTimestamp
};

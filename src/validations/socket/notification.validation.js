const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = joi.object().keys({
    serviceName : joi.string().required(),
    server : joi.string().required(),
    networkId: joi.array().required(),
    timestamp : joi.string().required(),
    address : joi.string().required().custom(customValidation.address)
});

module.exports = {
    getNotificationsByTimestamp,
};

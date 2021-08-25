const joi = require('joi');
const customValidation = require('./custom.validation');

const getNotificationsByTimestamp = joi.object().keys({
    whisperTimestamp : joi.string(),
    walletTimestamp : joi.string(),
    address : joi.string().required().custom(customValidation.address),
});

module.exports = {
    getNotificationsByTimestamp,
};

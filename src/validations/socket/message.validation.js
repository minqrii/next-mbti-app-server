const joi = require('joi');
const customValidation = require('./custom.validation');

const getMessageCount = joi.object().keys({
    address : joi.string().required().custom(customValidation.address)
});

const getMessageByAddress = joi.object().keys({
    address : joi.string().required().custom(customValidation.address),
    toAddress : joi.string().required().custom(customValidation.address)
});

module.exports = {
    getMessageCount,
    getMessageByAddress
};

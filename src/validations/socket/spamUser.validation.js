const joi = require('joi');
const customValidation = require('./custom.validation');

const getSpamUsers = joi.object().keys({
    address : joi.string().required().custom(customValidation.address)
});

module.exports = {
    getSpamUsers
};

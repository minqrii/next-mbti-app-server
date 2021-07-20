const joi = require('joi');
const customValidation = require('./custom.validation');


const getConnectionByAddress = {
    query : joi.object().keys({
        address : joi.string().required().custom(customValidation.address)
    }),
}

module.exports = {
    getConnectionByAddress,
};

const joi = require('joi');

const testValidation = joi.array().items({
   limit   : joi.string().required(),
   interval: joi.string().required()
});

module.exports = {
   testValidation
};

const joi = require('joi');
const socketCatchAsync = require('../utils/socketCatchAsync');

const socketValidate = (schema) => socketCatchAsync(async (io,socket,data) => {
    const {value, error} = joi.compile(schema)
        .prefs({errors: {label: 'key'}})
        .validate(data);
    if (error) {
        const errMessage = error.details.map((details) => details.message).join(', ');
        throw new Error(errMessage);
    }
    return value;
})

module.exports = socketValidate;
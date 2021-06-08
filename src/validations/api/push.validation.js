const joi = require('joi');
const customValidation = require('./custom.validation');

const syncPushCount = {
    params : joi.object().keys({
        key : joi.string().required()
    }),
    body : joi.object().keys({
        count : joi.number().required()
    })
}

const registerPushToken  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    })
}

const deregisterPushToken  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    })
}

module.exports = {
    syncPushCount,
    registerPushToken,
    deregisterPushToken
};

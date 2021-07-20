const joi = require('joi');
const customValidation = require('./custom.validation');

const syncPushNotificationCount = {
    params : joi.object().keys({
        key : joi.string().required()
    }),
    body : joi.object().keys({
        serviceName : joi.string().required(),
        count : joi.number().required()
    })
}

const registerPushNotificationToken  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    body : joi.object().keys({
        serviceName : joi.string().required(),
        version : joi.string()
    })
}

const deregisterPushNotificationToken  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    query : joi.object().keys({
        serviceName : joi.string().required(),
    })
}

const registerPushType  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    body : joi.object().keys({
        type : joi.string().required(),
        serviceName : joi.string().required()
    })
}

const deregisterPushType  = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    query : joi.object().keys({
        type : joi.string().required(),
        serviceName : joi.string().required()
    })
}

const getPushSound = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    query : joi.object().keys({
        serviceName : joi.string().required()
    })
}

const updatePushSound = {
    params : joi.object().keys({
        token : joi.string().required(),
        key : joi.string().required()
    }),
    body : joi.object().keys({
        soundName : joi.string().required(),
        serviceName : joi.string().required()
    })
}

module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType,
    getPushSound,
    updatePushSound
};

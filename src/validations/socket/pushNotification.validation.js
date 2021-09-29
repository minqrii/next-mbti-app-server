const joi = require('joi');

const syncPushNotificationCount = joi.object().keys({
    key : joi.string().required(),
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    count : joi.number().required()
});

const registerPushNotificationToken  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    version : joi.string(),
    token : joi.string().required(),
    key : joi.string().required()
});

const deregisterPushNotificationToken  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    token : joi.string().required(),
    key : joi.string().required()
});

const registerPushType  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    type : joi.string().required(),
    token : joi.string().required(),
    key : joi.string().required()
});

const deregisterPushType  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    type : joi.string().required(),
    token : joi.string().required(),
    key : joi.string().required()
});

const getPushSound  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    token : joi.string().required(),
    key : joi.string().required()
});


const updatePushSound  = joi.object().keys({
    serviceName : joi.string().required().valid('WHISPER', 'SLUSH', 'NFT'),
    soundName : joi.string().required(),
    token : joi.string().required(),
    key : joi.string().required()
});


module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType,
    getPushSound,
    updatePushSound
};

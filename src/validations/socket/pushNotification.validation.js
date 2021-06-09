const joi = require('joi');

const syncPushNotificationCount = joi.object().keys({
    key : joi.string().required(),
    count : joi.number().required()
});

const registerPushNotificationToken  = joi.object().keys({
    token : joi.string().required(),
    key : joi.string().required()
});

const deregisterPushNotificationToken  = joi.object().keys({
    token : joi.string().required(),
    key : joi.string().required()
});

module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken
};

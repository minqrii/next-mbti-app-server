const express = require('express');
const validate = require('../../../middlewares/validate');
const {pushNotificationValidation} = require('../../../validations/api');
const {pushNotificationController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/key/:key/count')
    //sync fcm count
    .post(validate(pushNotificationValidation.syncPushNotificationCount), pushNotificationController.syncPushNotificationCount)

router
    .route('/:token/key/:key')
    .post(validate(pushNotificationValidation.registerPushNotificationToken), pushNotificationController.registerPushNotificationToken)
    .delete(validate(pushNotificationValidation.deregisterPushNotificationToken), pushNotificationController.deregisterPushNotificationToken)

router
    .route('/:token/key/:key/type')
    .post(validate(pushNotificationValidation.registerPushType), pushNotificationController.registerPushType)
    .delete(validate(pushNotificationValidation.deregisterPushType), pushNotificationController.deregisterPushType)

router
    .route('/:token/key/:key/sound')
    .get(validate(pushNotificationValidation.getPushSound), pushNotificationController.getPushSound)
    .put(validate(pushNotificationValidation.updatePushSound), pushNotificationController.updatePushSound)


module.exports = router;

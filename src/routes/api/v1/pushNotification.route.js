const express = require('express');
const validate = require('../../../middlewares/validate');
const {pushNotificationValidation} = require('../../../validations/api');
const {pushNotificationController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/key/:key/count')
    .post(validate(pushNotificationValidation.syncPushNotificationCount), pushNotificationController.syncPushNotificationCount);

router
    .route('/:token/key/:key')
    .post(validate(pushNotificationValidation.registerPushNotificationToken), pushNotificationController.registerPushNotificationToken)
    .delete(validate(pushNotificationValidation.deregisterPushNotificationToken), pushNotificationController.deregisterPushNotificationToken)


module.exports = router;

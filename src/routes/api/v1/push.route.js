const express = require('express');
const validate = require('../../../middlewares/validate');
const {pushValidation} = require('../../../validations/api');
const {pushController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/key/:key/count')
    .post(validate(pushValidation.syncPushCount), pushController.syncPushCount);

router
    .route('/:token/key/:key')
    .post(validate(pushValidation.registerPushToken),pushController.registerPushToken)
    .delete(validate(pushValidation.deregisterPushToken),pushController.deregisterPushToken)

module.exports = router;

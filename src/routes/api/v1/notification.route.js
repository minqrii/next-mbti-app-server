const express = require('express');
const validate = require('../../../middlewares/validate');
const {notificationValidation} = require('../../../validations/api');
const {notificationController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/:address')
    .get(validate(notificationValidation.getNotificationsByTimestamp), notificationController.getNotificationsByTimestamp);

module.exports = router;

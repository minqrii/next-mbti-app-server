const express = require('express');
const validate = require('../../../middlewares/validate');
const {notificationValidation} = require('../../../validations/api');
const {notificationController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/message/:address')
    .get(validate(notificationValidation.getMessageNotification), notificationController.getMessageNotification);

router
    .route('/token/:address')
    .get(validate(notificationValidation.getTokenNotification), notificationController.getTokenNotification);

router
    .route('/escrow/:address')
    .get(validate(notificationValidation.getEscrowNotification), notificationController.getEscrowNotification);


module.exports = router;

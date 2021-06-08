const express = require('express');
const validate = require('../../../middlewares/validate');
const {spamUserValidation, transactionValidation} = require('../../../validations/api');
const {spamUserController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/register')
    .post(validate(transactionValidation.transactionPayload), spamUserController.registerSpamUser);

router
    .route('/deregister')
    .post(validate(transactionValidation.transactionPayload),spamUserController.deregisterSpamUser)

router
    .route('/:address')
    .post(validate(spamUserValidation.getSpamUsers),spamUserController.getSpamUsers)

module.exports = router;

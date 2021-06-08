const express = require('express');
const validate = require('../../../middlewares/validate');
const {messageValidation, transactionValidation} = require('../../../validations/api');
const {messageController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/test')
    .post(messageController.test);

router
    .route('/send')
    .post(validate(transactionValidation.transactionPayload), messageController.sendMessage);

router
    .route('/read')
    .post(validate(transactionValidation.transactionPayload),messageController.readMessage)

router
    .route('/:address/count')
    .post(validate(messageValidation.getMessageCount),messageController.getMessageCount)

router
    .route('/:address/count/:toAddress')
    .post(validate(messageValidation.getMessagesByAddress),messageController.getMessagesByAddress)

module.exports = router;

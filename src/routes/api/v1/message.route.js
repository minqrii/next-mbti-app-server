const express = require('express');
const validate = require('../../../middlewares/validate');
const {messageValidation, transactionValidation} = require('../../../validations/api');
const {messageController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/send')
    .post(validate(messageValidation.sendMessage), messageController.sendMessage);

router
    .route('/read')
    .post(validate(messageValidation.readMessage),messageController.readMessage)

router
    .route('/:address/count')
    .get(validate(messageValidation.getMessageCount),messageController.getMessageCount)

router
    .route('/:toAddress/address/:fromAddress')
    .get(validate(messageValidation.getMessagesByAddress),messageController.getMessagesByAddress)

module.exports = router;

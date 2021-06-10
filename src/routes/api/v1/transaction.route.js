const express = require('express');
const validate = require('../../../middlewares/validate');
const {transactionValidation} = require('../../../validations/api');
const {transactionController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/result')
    .post(validate(transactionValidation.sendTransactionResult), transactionController.sendTransactionResult);

module.exports = router;

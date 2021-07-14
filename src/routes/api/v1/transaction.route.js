const express = require('express');
const validate = require('../../../middlewares/validate');
const {transactionValidation} = require('../../../validations/api');
const {transactionController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/result')
    .post(validate(transactionValidation.sendTransactionResult), transactionController.sendTransactionResult);

router
    .route('/fail')
    .get(validate(transactionValidation.getSendFailTransactions), transactionController.getSendFailTransactions)
    .delete(validate(transactionValidation.deleteSendFailTransactions), transactionController.deleteSendFailTransactions)

router
    .route('/nonce')
    .get(validate(transactionValidation.getNonceByAddress), transactionController.getNonceByAddress)

module.exports = router;

const express = require('express');
const validate = require('../../../middlewares/validate');
const {tokenValidation} = require('../../../validations/api');
const {tokenController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/send')
    .post(validate(tokenValidation.sendToken), tokenController.sendToken);

router
    .route('/balance')
    .get(validate(tokenValidation.getTokensBalance), tokenController.getTokensBalance);

router
    .route('/transactions')
    .post(validate(tokenValidation.getTokenTransactionsByContractAddress), tokenController.getTokenTransactionsByContractAddress);

module.exports = router;

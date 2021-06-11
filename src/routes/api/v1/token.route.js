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
    .post(validate(tokenValidation.getAllTokenBalance), tokenController.getAllTokenBalance);

router
    .route('/:tokenName/balance')
    .get(validate(tokenValidation.getTokenBalanceByTokenName), tokenController.getTokenBalanceByTokenName);

router
    .route('/:tokenName/transactions')
    .post(validate(tokenValidation.getTokenTransactionsByTokenName), tokenController.getTokenTransactionsByTokenName);

module.exports = router;

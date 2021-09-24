const express = require('express');
const validate = require('../../../middlewares/validate');
const {candlestickValidation} = require('../../../validations/api');
const {candlestickController} = require('../../../controllers/api');

const router = express.Router();

router
  .route('/binance')
  .post(validate(candlestickValidation.getCandlestickFromBinance), candlestickController.getCandlestickFromBinance);

module.exports = router;
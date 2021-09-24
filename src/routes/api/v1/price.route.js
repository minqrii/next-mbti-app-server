const express = require('express');
const validate = require('../../../middlewares/validate');
const {priceValidation} = require('../../../validations/api');
const {priceController} = require('../../../controllers/api');

const router = express.Router();

router
  .route('/binance')
  .post(validate(priceValidation.getMarketPriceFromBinance), priceController.getMarketPriceFromBinance);

router
  .route('/upbit')
  .post(validate(priceValidation.getMarketPriceFromUpbit),priceController.getMarketPriceFromUpbit)

module.exports = router;
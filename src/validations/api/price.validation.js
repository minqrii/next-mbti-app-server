const joi = require('joi');

const getMarketPriceFromBinance = {
   body: joi.object().keys({
      symbols: joi.array().required()
   })
}

const getMarketPriceFromUpbit = {
   body: joi.object().keys({
      symbols : joi.array().required(),
      currency: joi.string().required()
   })
}

module.exports = {
   getMarketPriceFromBinance,
   getMarketPriceFromUpbit
};
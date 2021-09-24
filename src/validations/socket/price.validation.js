const joi = require('joi');

const getMarketPriceFromBinance = joi.object().keys({
   symbols: joi.array().required()
});

const getMarketPriceFromUpbit = joi.object().keys({
   symbols : joi.array().required(),
   currency: joi.string().required()
});

module.exports = {
   getMarketPriceFromBinance,
   getMarketPriceFromUpbit
};
const joi = require('joi');

const getCandlestickFromBinance = {
   body: joi.array().items({
      symbol  : joi.string().required(),
      limit   : joi.string().required(),
      interval: joi.string().required()
   })
};

module.exports = {
   getCandlestickFromBinance
};
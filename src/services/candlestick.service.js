const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const marketPriceAppServer = require('../utils/marketPriceAppServer');

const getCandlestickFromBinance = async function (data) {
   try {
      const getCandlestickFromBinanceResult = await marketPriceAppServer.post(`/candlestick/binance`, data);
      return getCandlestickFromBinanceResult.data;
   } catch (err) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
   }
};

module.exports = {
   getCandlestickFromBinance
};
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const marketPriceAppServer = require('../utils/marketPriceAppServer');

const getMarketPriceFromBinance = async function (data) {
   try {
      const getMarketPriceFromBinanceResult = await marketPriceAppServer.post(`/v1/tokens/send`,data);
      return getMarketPriceFromBinanceResult.data;
   } catch (err) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
   }
};

const getMarketPriceFromUpbit = async function (data) {
   try {
      const getMarketPriceFromUpbitResult = await marketPriceAppServer.post(`/v1/tokens/send`,data);
      return getMarketPriceFromUpbitResult.data;
   } catch (err) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
   }
};

module.exports = {
   getMarketPriceFromBinance,
   getMarketPriceFromUpbit
};
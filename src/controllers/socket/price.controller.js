const socketCatchAsync = require('../../utils/socketCatchAsync')
const {priceService} = require('../../services/index')

const getMarketPriceFromBinance = socketCatchAsync(async (io, socket, data, callback) => {
   let getMarketPriceFromBinanceStatus = await priceService.getMarketPriceFromBinance(data);
   callback(getMarketPriceFromBinanceStatus);
});

const getMarketPriceFromUpbit = socketCatchAsync(async (io, socket, data, callback) => {
   let getMarketPriceFromUpbitStatus = await priceService.getMarketPriceFromUpbit(data);
   callback(getMarketPriceFromUpbitStatus);
});

module.exports = {
   getMarketPriceFromBinance,
   getMarketPriceFromUpbit
}
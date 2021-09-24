const socketCatchAsync = require('../../utils/socketCatchAsync')
const {candlestickService} = require('../../services/index')

const getCandlestickFromBinance = socketCatchAsync(async (io, socket, data, callback) => {
   let getCandlestickFromBinanceStatus = await candlestickService.getCandlestickFromBinance(data);
   callback(getCandlestickFromBinanceStatus);
});

module.exports = {
   getCandlestickFromBinance
}
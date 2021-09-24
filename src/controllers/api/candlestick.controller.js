const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {candlestickService} = require('../../services');

const getCandlestickFromBinance = catchAsync(async(req, res)=>{
   const data = [...req.body];
   const getCandlestickFromBinanceStatus = await candlestickService.getCandlestickFromBinance(data);
   res.send(getCandlestickFromBinanceStatus)
})

module.exports = {
   getCandlestickFromBinance
};
const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {priceService} = require('../../services');

const getMarketPriceFromBinance = catchAsync(async(req, res)=>{
   const data = {...req.body, ...req.query, ...req.params}
   const getMarketPriceFromBinanceStatus = await priceService.getMarketPriceFromBinance(data);
   res.send(getMarketPriceFromBinanceStatus)
})

const getMarketPriceFromUpbit = catchAsync(async(req, res)=>{
   const data = {...req.body, ...req.query, ...req.params}
   const getMarketPriceFromUpbitStatus = await priceService.getMarketPriceFromUpbit(data);
   res.send(getMarketPriceFromUpbitStatus)
})

module.exports = {
   getMarketPriceFromBinance,
   getMarketPriceFromUpbit
};
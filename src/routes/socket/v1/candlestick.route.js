const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {candlestickValidation} = require('../../../validations/socket');
const {candlestickController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
   socket.on('getCandlestickFromBinance', socketMiddleware(
     socketValidate(candlestickValidation.getCandlestickFromBinance),
     candlestickController.getCandlestickFromBinance
   )(io,socket));
};
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {priceController} = require('../../../controllers/socket');
const {priceValidation} = require('../../../validations/socket');

module.exports = (io, socket) => {
   socket.on('getMarketPriceFromBinance', socketMiddleware(
     socketValidate(priceValidation.getMarketPriceFromBinance),
     priceController.getMarketPriceFromBinance
   )(io,socket));

   socket.on('getMarketPriceFromUpbit', socketMiddleware(
     socketValidate(priceValidation.getMarketPriceFromUpbit),
     priceController.getMarketPriceFromUpbit
   )(io,socket));
};

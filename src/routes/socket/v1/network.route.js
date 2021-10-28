const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {networkValidation} = require('../../../validations/socket');
const {networkController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
  //whisper messenger
  socket.on('getNetworks', socketMiddleware(
    socketValidate(networkValidation.getNetworks),
    networkController.getNetworks
  )(io,socket));
  
};

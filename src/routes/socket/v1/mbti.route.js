const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
// const {mbtiValidation} = require('../../../validations/socket');
const {mbtiController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
   socket.on('sendAnswer', socketMiddleware(
       mbtiController.sendAnswer
   )(io, socket));

   socket.on('changePageIdx', socketMiddleware(
       mbtiController.changePageIdx
   )(io, socket));
};

const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {mbtiValidation} = require('../../../validations/socket');
const {mbtiController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
   socket.on('testService', socketMiddleware(
     socketValidate(mbtiValidation.testValidation),
       mbtiController.testController()
   )(io,socket));
};

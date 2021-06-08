const {spamUserController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {spamUserValidation, transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    //whisper
    socket.on('registerSpamUser', socketMiddleware(
        socketValidate(transactionValidation.transactionPayload),
        spamUserController.registerSpamUser
    )(io,socket))
    socket.on('deregisterSpamUser', socketMiddleware(
        socketValidate(transactionValidation.transactionPayload),
        spamUserController.deregisterSpamUser
    )(io,socket))
    socket.on('getSpamUsers', socketMiddleware(
        socketValidate(spamUserValidation.getSpamUsers),
        spamUserController.getSpamUsers
    )(io,socket))
    //wallet


};

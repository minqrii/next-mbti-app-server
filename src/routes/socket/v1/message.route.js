const {messageController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {messageValidation, transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    //whisper
    socket.on('sendMessage', socketMiddleware(
        socketValidate(transactionValidation.transactionPayload),
        messageController.sendMessage
    )(io,socket))
    socket.on('readMessage', socketMiddleware(
        socketValidate(transactionValidation.transactionPayload),
        messageController.readMessage
    )(io,socket))
    socket.on('getMessageCount', socketMiddleware(
        socketValidate(messageValidation.getMessageCount),
        messageController.getMessageCount
    )(io,socket))
    socket.on('getMessageByAddress', socketMiddleware(
        socketValidate(messageValidation.getMessageByAddress),
        messageController.getMessageByAddress
    )(io,socket))
    //wallet


};

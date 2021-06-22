const {messageController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {messageValidation, transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    //whisper messenger
    socket.on('sendMessage', socketMiddleware(
        socketValidate(messageValidation.sendMessage),
        messageController.sendMessage
    )(io,socket));

    socket.on('readMessage', socketMiddleware(
        socketValidate(messageValidation.readMessage),
        messageController.readMessage
    )(io,socket));

    socket.on('getMessageCount', socketMiddleware(
        socketValidate(messageValidation.getMessageCount),
        messageController.getMessageCount
    )(io,socket));

    socket.on('getMessagesByAddress', socketMiddleware(
        socketValidate(messageValidation.getMessagesByAddress),
        messageController.getMessagesByAddress
    )(io,socket));


    //wallet


};

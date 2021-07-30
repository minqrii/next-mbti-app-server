const {userController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {userValidation, transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    //whisper
    socket.on('registerSpamUser', socketMiddleware(
        socketValidate(userValidation.registerSpamUser),
        userController.registerSpamUser
    )(io,socket))

    socket.on('deregisterSpamUser', socketMiddleware(
        socketValidate(userValidation.deregisterSpamUser),
        userController.deregisterSpamUser
    )(io,socket))

    socket.on('exportUserFriends', socketMiddleware(
        socketValidate(userValidation.exportUserFriends),
        userController.exportUserFriends
    )(io,socket))

    socket.on('importUserFriends', socketMiddleware(
        socketValidate(userValidation.importUserFriends),
        userController.importUserFriends
    )(io,socket))

    socket.on('getSpamUsers', socketMiddleware(
        socketValidate(userValidation.getSpamUsers),
        userController.getSpamUsers
    )(io,socket))
    //wallet
};

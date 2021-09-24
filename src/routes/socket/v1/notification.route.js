const socketMiddleware = require('../../../utils/socketMiddleware');
const socketValidate = require('../../../middlewares/socketValidate');
const {notificationValidation} = require('../../../validations/socket');
const {notificationController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
    socket.on('getMessageNotification', socketMiddleware(
        socketValidate(notificationValidation.getMessageNotification),
        notificationController.getMessageNotification
    )(io,socket))

    socket.on('getTokenNotification', socketMiddleware(
        socketValidate(notificationValidation.getTokenNotification),
        notificationController.getTokenNotification
    )(io,socket))

    socket.on('getEscrowNotification', socketMiddleware(
        socketValidate(notificationValidation.getEscrowNotification),
        notificationController.getEscrowNotification
    )(io,socket))
};

const socketMiddleware = require('../../../utils/socketMiddleware');
const socketValidate = require('../../../middlewares/socketValidate');
const {notificationValidation} = require('../../../validations/socket');
const {notificationController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
    socket.on('getNotificationsByTimestamp', socketMiddleware(
        socketValidate(notificationValidation.getNotificationsByTimestamp),
        notificationController.getNotificationsByTimestamp
    )(io,socket))
};

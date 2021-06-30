const socketMiddleware = require('../../../utils/socketMiddleware');
const socketValidate = require('../../../middlewares/socketValidate');
const {pushNotificationValidation} = require('../../../validations/socket');
const {pushNotificationController} = require('../../../controllers/socket');

module.exports = (io, socket) => {

    socket.on('syncPushNotificationCount', socketMiddleware(
        socketValidate(pushNotificationValidation.syncPushNotificationCount),
        pushNotificationController.syncPushNotificationCount
    )(io,socket))

    socket.on('registerPushNotificationToken', socketMiddleware(
        socketValidate(pushNotificationValidation.registerPushNotificationToken),
        pushNotificationController.registerPushNotificationToken
    )(io,socket))

    socket.on('deregisterPushNotificationToken', socketMiddleware(
        socketValidate(pushNotificationValidation.deregisterPushNotificationToken),
        pushNotificationController.deregisterPushNotificationToken
    )(io,socket))

    socket.on('registerPushType', socketMiddleware(
        socketValidate(pushNotificationValidation.registerPushType),
        pushNotificationController.registerPushType
    )(io, socket))

    socket.on('deregisterPushType', socketMiddleware(
        socketValidate(pushNotificationValidation.deregisterPushType),
        pushNotificationController.deregisterPushType
    )(io, socket))
};

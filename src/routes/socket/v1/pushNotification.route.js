const socketMiddleware = require('../../../utils/socketMiddleware');
const socketValidate = require('../../../middlewares/socketValidate');
const {pushNotificationValidation} = require('../../../validations/socket');
const {pushNotificationController} = require('../../../controllers/socket');

module.exports = (io, socket) => {
    socket.on('syncPushNotificationCount', socketMiddleware(
        socketValidate(pushNotificationValidation.syncPushNotificationCount),
        pushNotificationController.syncPushNotificationCount
    ))

    socket.on('registerPushNotificationToken', socketMiddleware(
        socketValidate(pushNotificationValidation.registerPushNotificationToken),
        pushNotificationController.registerPushNotificationToken
    ))

    socket.on('deregisterPushNotificationToken', socketMiddleware(
        socketValidate(pushNotificationValidation.deregisterPushNotificationToken),
        pushNotificationController.deregisterPushNotificationToken
    ))
};

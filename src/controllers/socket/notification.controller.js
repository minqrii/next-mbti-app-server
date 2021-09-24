const socketCatchAsync = require('../../utils/socketCatchAsync')
const {notificationService} = require('../../services/index')


const getMessageNotification = socketCatchAsync(async (io, socket, data, callback) => {
    const notifications = await notificationService.getMessageNotification(data);
    callback(notifications);
})
const getTokenNotification = socketCatchAsync(async (io, socket, data, callback) => {
    const notifications = await notificationService.getTokenNotification(data);
    callback(notifications);
})
const getEscrowNotification = socketCatchAsync(async (io, socket, data, callback) => {
    const notifications = await notificationService.getEscrowNotification(data);
    callback(notifications);
})
module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
}

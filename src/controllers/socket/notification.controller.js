const socketCatchAsync = require('../../utils/socketCatchAsync')
const {notificationService} = require('../../services/index')

const getNotificationsByTimestamp = socketCatchAsync(async (io, socket, data, callback) => {
    let notifications = await notificationService.getNotificationsByTimestamp(data)
    callback(notifications)
});

module.exports = {
    getNotificationsByTimestamp
}

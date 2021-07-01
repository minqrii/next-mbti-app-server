const socketCatchAsync = require('../../utils/socketCatchAsync')
const {notificationService} = require('../../services/index')

const getNotificationsByTimestamp = socketCatchAsync(async (io, socket, data) => {
    let notifications = await notificationService.getNotificationsByTimestamp(data)
    socket.emit('getNotificationsByTimestamp', notifications)
});

module.exports = {
    getNotificationsByTimestamp
}

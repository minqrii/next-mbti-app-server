const socketCatchAsync = require('../../utils/socketCatchAsync')
const {notificationService} = require('../../services/index')

const getNotificationsByTimestamp = socketCatchAsync(async (io, socket, data) => {
    let notifications = await notificationService.getNotificationsByTimestamp(data)
    socket.emit('getNotificationsByTimestamp', notifications)
    //todo :: 개발 후 delete
    socket.emit("log",'getNotificationsByTimestamp')
});

module.exports = {
    getNotificationsByTimestamp
}

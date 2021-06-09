const socketCatchAsync = require('../../utils/socketCatchAsync')
const {pushNotificationService} = require('../../services/index')

const syncPushNotificationCount = socketCatchAsync(async (io, socket, data) => {
    let syncPushNotificationCountStatus = await pushNotificationService.syncPushNotificationCount(data)
    socket.emit('syncPushNotificationCount', syncPushNotificationCountStatus)
});

const registerPushNotificationToken = socketCatchAsync(async (io, socket, data) => {
    let registerPushNotificationTokenStatus = await pushNotificationService.registerPushNotificationToken(data)
    socket.emit('registerPushNotificationToken', registerPushNotificationTokenStatus)
});

const deregisterPushNotificationToken = socketCatchAsync(async (io, socket, data) =>{
    let deregisterPushNotificationTokenStatus = await pushNotificationService.deregisterPushNotificationToken(data);
    socket.emit('deregisterPushNotificationToken', deregisterPushNotificationTokenStatus);
})

module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
};
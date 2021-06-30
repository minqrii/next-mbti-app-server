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

const registerPushType = socketCatchAsync(async (io, socket, data) =>{
    const registerPushTypeStatus = await pushNotificationService.registerPushType(data)
    socket.emit('registerPushType', registerPushTypeStatus);
})

const deregisterPushType = socketCatchAsync(async (io, socket, data) =>{
    const deregisterPushTypeStatus = await pushNotificationService.deregisterPushType(data)
    socket.emit('deregisterPushType', deregisterPushTypeStatus);
})

module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType
};
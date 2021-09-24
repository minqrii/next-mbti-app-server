const socketCatchAsync = require('../../utils/socketCatchAsync')
const {pushNotificationService} = require('../../services/index')

const syncPushNotificationCount = socketCatchAsync(async (io, socket, data, callback) => {
    let syncPushNotificationCountStatus = await pushNotificationService.syncPushNotificationCount(data)
    callback(syncPushNotificationCountStatus)
});

const registerPushNotificationToken = socketCatchAsync(async (io, socket, data, callback) => {
    let registerPushNotificationTokenStatus = await pushNotificationService.registerPushNotificationToken(data)
    callback(registerPushNotificationTokenStatus)
});

const deregisterPushNotificationToken = socketCatchAsync(async (io, socket, data, callback) =>{
    let deregisterPushNotificationTokenStatus = await pushNotificationService.deregisterPushNotificationToken(data);
    callback(deregisterPushNotificationTokenStatus)
})

const registerPushType = socketCatchAsync(async (io, socket, data, callback) =>{
    const registerPushTypeStatus = await pushNotificationService.registerPushType(data)
    callback(registerPushTypeStatus)
})

const deregisterPushType = socketCatchAsync(async (io, socket, data, callback) =>{
    const deregisterPushTypeStatus = await pushNotificationService.deregisterPushType(data)
    callback(deregisterPushTypeStatus)
})

const getPushSound = socketCatchAsync(async (io, socket, data, callback) =>{
    const getPushSoundStatus = await pushNotificationService.getPushSound(data)
    callback(getPushSoundStatus)
})

const updatePushSound = socketCatchAsync(async (io, socket, data, callback) =>{
    const updatePushSoundStatus = await pushNotificationService.updatePushSound(data)
    callback(updatePushSoundStatus)
})


module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken,
    registerPushType,
    deregisterPushType,
    getPushSound,
    updatePushSound
};

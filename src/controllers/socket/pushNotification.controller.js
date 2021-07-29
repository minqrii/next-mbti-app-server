const socketCatchAsync = require('../../utils/socketCatchAsync')
const {pushNotificationService} = require('../../services/index')

const syncPushNotificationCount = socketCatchAsync(async (io, socket, data, callback) => {
    let syncPushNotificationCountStatus = await pushNotificationService.syncPushNotificationCount(data)
    callback(syncPushNotificationCountStatus)
});

const registerPushNotificationToken = socketCatchAsync(async (io, socket, data) => {
    let registerPushNotificationTokenStatus = await pushNotificationService.registerPushNotificationToken(data)
    //todo :: 개발 후 delete
    socket.emit("log",'registerPushNotificationToken')
    socket.emit('registerPushNotificationToken', registerPushNotificationTokenStatus)
});

const deregisterPushNotificationToken = socketCatchAsync(async (io, socket, data) =>{
    let deregisterPushNotificationTokenStatus = await pushNotificationService.deregisterPushNotificationToken(data);
    //todo :: 개발 후 delete
    socket.emit("log",'deregisterPushNotificationToken')
    socket.emit('deregisterPushNotificationToken', deregisterPushNotificationTokenStatus);
})

const registerPushType = socketCatchAsync(async (io, socket, data) =>{
    const registerPushTypeStatus = await pushNotificationService.registerPushType(data)
    //todo :: 개발 후 delete
    socket.emit("log",'registerPushType')
    socket.emit('registerPushType', registerPushTypeStatus);
})

const deregisterPushType = socketCatchAsync(async (io, socket, data) =>{
    const deregisterPushTypeStatus = await pushNotificationService.deregisterPushType(data)
    //todo :: 개발 후 delete
    socket.emit("log",'deregisterPushType')
    socket.emit('deregisterPushType', deregisterPushTypeStatus);
})

const getPushSound = socketCatchAsync(async (io, socket, data) =>{
    const getPushSoundStatus = await pushNotificationService.getPushSound(data)
    //todo :: 개발 후 delete
    socket.emit("log",'getPushSound')
    socket.emit('getPushSound', getPushSoundStatus);
})

const updatePushSound = socketCatchAsync(async (io, socket, data) =>{
    const updatePushSoundStatus = await pushNotificationService.updatePushSound(data)
    //todo :: 개발 후 delete
    socket.emit("log",'updatePushSound')
    socket.emit('updatePushSound', updatePushSoundStatus);
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

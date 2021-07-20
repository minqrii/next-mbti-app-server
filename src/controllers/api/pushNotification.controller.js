const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {pushNotificationService} = require('../../services');

const syncPushNotificationCount = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const syncPushNotificationCountStatus = await pushNotificationService.syncPushNotificationCount(data);
    res.json(syncPushNotificationCountStatus)
});

const registerPushNotificationToken = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const registerPushNotificationTokenStatus = await pushNotificationService.registerPushNotificationToken(data);
    res.json(registerPushNotificationTokenStatus)
});

const deregisterPushNotificationToken = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const deregisterPushNotificationTokenStatus = await pushNotificationService.deregisterPushNotificationToken(data);
    res.json(deregisterPushNotificationTokenStatus)
});

const registerPushType = catchAsync(async (req,res)=>{
    const data = {...req.query, ...req.body, ...req.params}
    const registerPushTypeStatus = await pushNotificationService.registerPushType(data)
    res.send(registerPushTypeStatus);
})

const deregisterPushType = catchAsync(async (req,res)=>{
    const data = {...req.query, ...req.body, ...req.params}
    const deregisterPushTypeStatus = await pushNotificationService.deregisterPushType(data)
    res.send(deregisterPushTypeStatus);
})

const getPushSound = catchAsync(async (req,res)=>{
    const data = {...req.query, ...req.body, ...req.params}
    const getPushSoundStatus = await pushNotificationService.getPushSound(data)
    res.send(getPushSoundStatus);
})

const updatePushSound = catchAsync(async (req,res)=>{
    const data = {...req.query, ...req.body, ...req.params}
    const updatePushSoundStatus = await pushNotificationService.updatePushSound(data)
    res.send(updatePushSoundStatus);
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

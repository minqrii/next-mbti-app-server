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


module.exports = {
    syncPushNotificationCount,
    registerPushNotificationToken,
    deregisterPushNotificationToken
};

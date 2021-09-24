const catchAsync = require('../../utils/catchAsync');
const {notificationService} = require('../../services');

const getMessageNotification = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params};
    const notifications = await notificationService.getMessageNotification(data);
    res.json(notifications);
})
const getTokenNotification = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params};
    const notifications = await notificationService.getTokenNotification(data);
    res.json(notifications);
})
const getEscrowNotification = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params};
    const notifications = await notificationService.getEscrowNotification(data);
    res.json(notifications);
})

module.exports = {
    getMessageNotification,
    getTokenNotification,
    getEscrowNotification
};

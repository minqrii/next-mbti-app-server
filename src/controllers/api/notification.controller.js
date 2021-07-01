const catchAsync = require('../../utils/catchAsync');
const {notificationService} = require('../../services');

const getNotificationsByTimestamp = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const notifications = await notificationService.getNotificationsByTimestamp(data);
    res.json(notifications)
});

module.exports = {
    getNotificationsByTimestamp,
};

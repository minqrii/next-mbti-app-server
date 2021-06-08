const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {spamUserService} = require('../../services');

const registerSpamUser = catchAsync(async (req, res) => {
    const registerSpamStatus = await spamUserService.registerSpamUser(req.data);
    res.json(registerSpamStatus)
});

const deregisterSpamUser = catchAsync(async (req, res) => {
    const deregisterSpamStatus = await spamUserService.deregisterSpamUser(req.data);
    res.json(deregisterSpamStatus)
});

const getSpamUsers = catchAsync(async (req, res) => {
    const spamUsers = await spamUserService.getSpamUsers(req.query);
    res.json(spamUsers)
});


module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
};

const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {spamUserService} = require('../../services');

const registerSpamUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const registerSpamStatus = await spamUserService.registerSpamUser(data);
    res.json(registerSpamStatus)
});

const deregisterSpamUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const deregisterSpamStatus = await spamUserService.deregisterSpamUser(data);
    res.json(deregisterSpamStatus)
});

const getSpamUsers = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const spamUsers = await spamUserService.getSpamUsers(data);
    res.json(spamUsers)
});


module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
};

const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {userService} = require('../../services');

const registerSpamUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const registerSpamStatus = await userService.registerSpamUser(data);
    res.json(registerSpamStatus)
});

const deregisterSpamUser = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const deregisterSpamStatus = await userService.deregisterSpamUser(data);
    res.json(deregisterSpamStatus)
});

const getSpamUsers = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const spamUsers = await userService.getSpamUsers(data);
    res.json(spamUsers)
});

const exportUserFriends = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const exportUserFriendsResult = await userService.exportUserFriends(data);
    res.json(exportUserFriendsResult)
})

const importUserFriends = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const importUserFriendsResult = await userService.importUserFriends(data);
    res.json(importUserFriendsResult)
})

module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

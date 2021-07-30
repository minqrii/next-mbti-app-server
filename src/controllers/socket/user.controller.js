const socketCatchAsync = require('../../utils/socketCatchAsync')
const {userService} = require('../../services/index')

const registerSpamUser = socketCatchAsync(async (io, socket, data, callback) => {
    let registerSpamStatus = await userService.registerSpamUser(data)
    callback(registerSpamStatus)
});

const deregisterSpamUser = socketCatchAsync(async (io, socket, data, callback) => {
    let deregisterSpamStatus = await userService.deregisterSpamUser(data)
    callback(deregisterSpamStatus)
});

const getSpamUsers = socketCatchAsync(async (io, socket, data, callback) =>{
    let spamUsers = await userService.getSpamUsers(data);
    callback(spamUsers)
})

const exportUserFriends = socketCatchAsync(async (io, socket, data, callback)=> {
    let exportUserFriendsResult = await userService.exportUserFriends(data);
    callback(exportUserFriendsResult)
})

const importUserFriends = socketCatchAsync(async (io, socket, data, callback)=> {
    let importUserFriendsResult = await userService.importUserFriends(data);
    callback(importUserFriendsResult)
})


module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

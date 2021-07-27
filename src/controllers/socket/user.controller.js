const socketCatchAsync = require('../../utils/socketCatchAsync')
const {userService} = require('../../services/index')

const registerSpamUser = socketCatchAsync(async (io, socket, data) => {
    let registerSpamStatus = await userService.registerSpamUser(data)
    socket.emit('registerSpamUser', registerSpamStatus)
    //:todo 개발 후 delete
    socket.emit('log', 'registerSpamUser')
});

const deregisterSpamUser = socketCatchAsync(async (io, socket, data) => {
    let deregisterSpamStatus = await userService.deregisterSpamUser(data)
    socket.emit('deregisterSpamUser', deregisterSpamStatus)
    //:todo 개발 후 delete
    socket.emit('log', 'deregisterSpamUser')
});

const getSpamUsers = socketCatchAsync(async (io, socket, data) =>{
    let spamUsers = await userService.getSpamUsers(data);
    socket.emit('getSpamUsers', spamUsers);
    //:todo 개발 후 delete
    socket.emit('log', 'getSpamUsers')
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

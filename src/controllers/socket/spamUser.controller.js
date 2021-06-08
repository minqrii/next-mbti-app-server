const socketCatchAsync = require('../../utils/socketCatchAsync')
const {spamUserService} = require('../../services/index')

const registerSpamUser = socketCatchAsync(async (io, socket, data) => {
    let registerSpamStatus = await spamUserService.registerSpamUser(data)
    socket.emit('registerSpamUser', registerSpamStatus)
});

const deregisterSpamUser = socketCatchAsync(async (io, socket, data) => {
    let deregisterSpamStatus = await spamUserService.deregisterSpamUser(data)
    socket.emit('deregisterSpamUser', deregisterSpamStatus)
});

const getSpamUsers = socketCatchAsync(async (io, socket, data) =>{
    let spamUsers = await spamUserService.getSpamUsers(data);
    socket.emit('getSpamUsers', spamUsers);
})

module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
};
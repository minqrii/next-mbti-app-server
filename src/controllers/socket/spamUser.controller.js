const socketCatchAsync = require('../../utils/socketCatchAsync')
const {spamUserService} = require('../../services/index')

const registerSpamUser = socketCatchAsync(async (io, socket, data) => {
    let registerSpamStatus = await spamUserService.registerSpamUser(data)
    socket.emit('registerSpamUser', registerSpamStatus)
    //:todo 개발 후 delete
    socket.emit('log', 'registerSpamUser')
});

const deregisterSpamUser = socketCatchAsync(async (io, socket, data) => {
    let deregisterSpamStatus = await spamUserService.deregisterSpamUser(data)
    socket.emit('deregisterSpamUser', deregisterSpamStatus)
    //:todo 개발 후 delete
    socket.emit('log', 'deregisterSpamUser')
});

const getSpamUsers = socketCatchAsync(async (io, socket, data) =>{
    let spamUsers = await spamUserService.getSpamUsers(data);
    socket.emit('getSpamUsers', spamUsers);
    //:todo 개발 후 delete
    socket.emit('log', 'getSpamUsers')
})

module.exports = {
    registerSpamUser,
    deregisterSpamUser,
    getSpamUsers,
};

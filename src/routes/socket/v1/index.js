const config = require('../../../config/config');
const redisClient = require('../../../config/database/redis');
const userRoute = require('./user.route');
const messageRoute = require('./message.route');
const notificationRoute = require('./notification.route')
const pushNotificationRoute = require('./pushNotification.route');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketCatchAsync = require('../../../utils/socketCatchAsync')
const transactionRoute = require('./transaction.route')
const tokenRoute = require('./token.route')

const initialize = (io, socket) => {
    return new Promise(async (resolve, reject) => {
        await io.of('/').adapter.remoteJoin(socket.id, socket.address).catch((err)=> reject(err));
        await io.of('/').adapter.allRooms().then((result)=> console.log(result))
        await redisClient.saddAsync('connectedUser', socket.address)
        resolve();
    })
};

const disconnectHandler = socketCatchAsync(async (io, socket, data) =>{
    await redisClient.sremAsync('connectedUser', socket.address)
        .catch((err)=>{
            throw new Error('disconnect redis error')
        })
})

module.exports = function (io) {
    io.on('connection', (socket) => {
        initialize(io, socket)
            .then(() => {
                userRoute(io, socket);
                messageRoute(io, socket);
                notificationRoute(io, socket);
                pushNotificationRoute(io,socket);
                transactionRoute(io,socket);
                tokenRoute(io,socket);
            })
            .catch((err) => {
                socket.emit('error', err.message)
            });
        socket.on('disconnect', socketMiddleware(
            disconnectHandler
        )(io,socket))
    })
};

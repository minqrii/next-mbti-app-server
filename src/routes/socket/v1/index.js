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
const escrowRoute = require('./escrow.route')

const initialize = (io, socket) => {
    return new Promise(async (resolve, reject) => {
       try{
          if(!socket.address || !socket.serviceName){
             reject(new Error('No Socket Id'))
          }
          await io.of('/').adapter.remoteJoin(socket.id, `${socket.serviceName}_${socket.address}`).catch((err)=> reject(err));
          await io.of('/').adapter.allRooms().then((result)=> console.log(result))
          await redisClient.saddAsync(`${socket.serviceName}_connectedUsers`, socket.address)
          resolve();
       }catch(err){
          reject(err)
       }
    })
};

const disconnectHandler = socketCatchAsync(async (io, socket, data) =>{
   if(!socket.address || !socket.serviceName){
      throw new Error('No Socket Id')
   }
    await redisClient.sremAsync(`${socket.serviceName}_connectedUsers`, socket.address)
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
                escrowRoute(io,socket);
            })
            .catch((err) => {
                socket.emit('error', err.message)
            });
        socket.on('disconnect', socketMiddleware(
            disconnectHandler
        )(io,socket))
    })
};

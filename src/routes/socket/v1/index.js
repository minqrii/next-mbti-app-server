const config = require('../../../config/config');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketCatchAsync = require('../../../utils/socketCatchAsync')
const mbtiRoute = require('./mbti.route');

const initialize = (io, socket) => {
    return new Promise(async (resolve, reject) => {
       try{
           console.log(socket)
          // if(!socket.address || !socket.serviceName){
          //    reject(new Error('No Socket Id'))
          // }
          // await io.of('/').adapter.remoteJoin(socket.id, `${socket.serviceName}_${socket.address}`).catch((err)=> reject(err));
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
})

module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log("hi")
        initialize(io, socket)
            .then(() => {
                console.log(socket)
                mbtiRoute(io,socket);
            })
            .catch((err) => {
                console.error(err)
                socket.emit('error', err.message)
            });
        socket.on('disconnect', socketMiddleware(
            disconnectHandler
        )(io,socket))
    })
};

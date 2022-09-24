const config = require('../../../config/config');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketCatchAsync = require('../../../utils/socketCatchAsync')
const mbtiRoute = require('./mbti.route');
const mbtiService = require('../../../services/mbti.service');

const initialize = (io, socket) => {
    return new Promise(async (resolve, reject) => {
       try{
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
      throw new Error('No Socket Id')
})

module.exports = function (io) {
    io.on('connection', (socket) => {
        initialize(io, socket)
            .then(() => {
                mbtiRoute(io,socket);
            })
            .then(async () => {
                const savedIdx = await mbtiService.getPageIdx();
                const currentAnswerStatus = await mbtiService.getCurrentAnswerStatus();
                io.of("/").emit("getPageIdx", savedIdx);
                io.of("/").emit("getAnswerResult", currentAnswerStatus);
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

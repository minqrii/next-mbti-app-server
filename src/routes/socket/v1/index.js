const config = require('../../../config/config');
const redisClient = require('../../../config/database/redis');
const spamUserRoute = require('./spamUser.route');
const messageRoute = require('./message.route');
const notificationRoute = require('./notification.route')
const pushNotificationRoute = require('./pushNotification.route');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketCatchAsync = require('../../../utils/socketCatchAsync')
const transactionRoute = require('./transaction.route')
const tokenRoute = require('./token.route')
const testRoute = require('./test.route')

const initialize = (io, socket) => {
    return new Promise(async (resolve, reject) => {
        await io.of('/').adapter.remoteJoin(socket.id, socket.address).catch((err)=> reject(err));
        await io.of('/').adapter.allRooms().then((result)=> console.log(result))
        await redisClient.saddAsync('connectedUser', socket.address).then((data)=>{
            if(data === 0){
                //todo::
                console.log('already connected')
                //이미 해당 아이디를 가지고 있는 유저가 연결되어 있다.
                //중복로그인 시 기존 로그인 유저를 차단하기 위해서 사용할 수 있음, 이 때에는 adapter을 활용해서 join된 socket id를 강제로 disconnect 시켜주고, 등록하면 됨
            }else{
                console.log('new connection')
                //헤당 아이디로 유저가 연결되어 있지 않은 경우 1이 response로 내려오며, 중복로그인을 허용하는 서비스의 경우 이 단계에서 처리해줄 내용이 없다.
            }
        }).catch((err)=> reject(err))
        resolve();
    })
};

// const disconnectHandler = (socket) => async () => {
//     return new Promise(async (resolve, reject)=>{
//         await redisClient.selectAsync(config.redis.database.connectedUser).catch((err)=> reject (err))
//         await redisClient.sremAsync('connectedUser', socket.address).then((data)=>{
//             // res === 0 : 지우는 값이 없는 경우 (srem 실패)
//             // res === 1 : 지우는 값이 있는 경우 (srem 성공)
//         }).catch((err) => reject(err))
//         resolve();
//     })
// };

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
                spamUserRoute(io, socket);
                messageRoute(io, socket);
                notificationRoute(io, socket);
                pushNotificationRoute(io,socket);
                transactionRoute(io,socket);
                tokenRoute(io,socket);
                testRoute(io,socket);
            })
            .catch((err) => {
                console.log(err);
                // TODO:: socket.emit('error')
            });
        socket.on('disconnect', socketMiddleware(
            disconnectHandler
        )(io,socket))
    })
};

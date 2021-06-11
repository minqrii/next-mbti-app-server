const io = require('socket.io')();
const httpStatus = require('http-status');
const IORedis = require('socket.io-redis');

const config = require('./config/config');
const redisClient = require('./config/database/redis');

const appServer = require('./utils/walletAppServer');

io.adapter(IORedis({host: config.redis.host, port: config.redis.port}));

io.use(async (socket, next) => {
    try {
        const authToken = socket.handshake.auth.token;
        console.log(socket.handshake.query.address)
        // const payload = await appServer.get('/v1/auth/jwt-payload' + '?' + 'token=' + `${authToken}`);
        const payload = {data:{sub:socket.handshake.query.address}}
        socket.address = payload.data.sub;
        next();
    } catch (err) {
        next(new Error('Please authenticate'))
    }
});

// TODO :: remoteJoin timeout 해결해보기
// io.use(async (socket, next) => {
//     try {
//         await io.of('/').adapter.remoteJoin(socket.id, socket.userId);
//         // await io.of('/').adapter.remoteJoin(socket.id, socket.userId);
//
//         // TODO :: 1 to constants Variable
//         await redisClient.select(1, (err) => {
//             throw err;
//         });
//
//         await redisClient.sadd('connectedUser', socket.userId, (err, res) => {
//             // res === 0 : 이미 연결된 상태 (sadd 실패)
//             // res === 1 : 처음 연결 (sadd 성공)
//
//             if (err) {
//                 throw err;
//             }
//         });
//
//         next();
//     } catch (err) {
//         console.log(err);
//         next(new Error('Redis Client Error'))
//     }
// });

// const v1Namespace = io.of('/socket/v1');
// require('./routes/socket/v1')(v1Namespace);
require('./routes/socket/v1')(io);

// io.use((socket, next) => {
//     next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'))
// });
//

module.exports = io;

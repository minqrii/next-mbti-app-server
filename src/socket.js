const io = require('socket.io')();
const IORedis = require('socket.io-redis');

const config = require('./config/config');

io.adapter(IORedis({host: config.redis.host, port: config.redis.port}));

io.use(async (socket, next) => {
    try {
        console.log(socket.handshake.query.address)
        socket.address = socket.handshake.query.address
        //todo:: address가 맞는 꼴인지 검증해서 소켓 커넥션 끊어줄 필요가 있음
        next();
    } catch (err) {
        next(new Error('Please authenticate'))
    }

});

require('./routes/socket/v1')(io);

module.exports = io;

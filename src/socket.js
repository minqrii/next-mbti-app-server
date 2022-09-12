const io = require('socket.io')();
// const IORedis = require('socket.io-redis');

const config = require('./config/config');

// io.adapter(IORedis({host: config.redis.host, port: config.redis.port}));

io.use(async (socket, next) => {
    try {
        // socket.address = socket.handshake.query.address
        // socket.serviceName = socket.handshake.query.serviceName
        console.log("socket connected")
        next();
    } catch (err) {
        next(new Error('Please authenticate'))
    }

});

require('./routes/socket/v1')(io);

module.exports = io;

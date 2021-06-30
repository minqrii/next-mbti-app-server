const socketCatchAsync = require('../../utils/socketCatchAsync')

const testDisconnect = socketCatchAsync(async (io, socket, data) => {
    io.disconnectSockets()
});
const testPingPong = socketCatchAsync(async (io, socket, data) => {
    socket.emit('pong')
});

module.exports = {
    testDisconnect,
    testPingPong
};
const {testController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
module.exports = (io, socket) => {
    //whisper
    socket.on('disconnectAll', socketMiddleware(
        testController.testDisconnect
    )(io,socket))
    //wallet
    socket.on('ping',socketMiddleware(
        testController.testPingPong
    )(io,socket))


};

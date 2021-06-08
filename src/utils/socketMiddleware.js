const socketMiddleware = (...args) => (io, socket) => (data) => {
    if (args.length === 0) {
        return;
    }
    const execFuc = args[0];
    const arg = args.slice(1);
    Promise.resolve(execFuc(io, socket, data))
        .then(socketMiddleware(...arg)(io, socket))
        .catch((err) => {
            console.log('hi error')
            socket.emit('error', err.message)
        })
}
module.exports = socketMiddleware;
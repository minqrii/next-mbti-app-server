const socketMiddleware = (...args) => (io, socket) => (data, callback) => {
    if (args.length === 0) {
        return;
    }
    const execFuc = args[0];
    const arg = args.slice(1);

    Promise.resolve(execFuc(io, socket, data, callback))
        .then((data) => socketMiddleware(...arg)(io, socket)(data, callback))
        .catch((err) => {
            socket.emit('error', err.message)
        })
}

module.exports = socketMiddleware;

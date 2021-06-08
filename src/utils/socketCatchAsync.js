const socketCatchAsync = (fn) => (io,socket,data) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fn(io,socket,data))
        } catch (err) {
            reject(err);
        }
    })
};

module.exports = socketCatchAsync;
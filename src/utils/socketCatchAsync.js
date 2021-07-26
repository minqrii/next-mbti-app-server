const socketCatchAsync = (fn) => (io,socket,data,callback) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fn(io,socket,data,callback))
        } catch (err) {
            reject(err);
        }
    })
};

module.exports = socketCatchAsync;

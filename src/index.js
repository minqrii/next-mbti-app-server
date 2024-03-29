const http = require('http');
const app = require('./app');
const io = require('./socket');
const config = require('./config/config');
const logger = require('./config/logger');
const axios = require("axios");
let server;

server = http.createServer(app);
io.attach(server);
app.io = io;
server.listen(config.port, () => {
    logger.info('Listening to port %d', config.port);
});


const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        })
    } else {
        process.exit(1);
    }
}

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
}

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGINT', () => {
    logger.info('SIGINT received');
    if (server) {
        server.close();
    }
    if (process) {
        process.exit(1);
    }
});


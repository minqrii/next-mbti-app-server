const {escrowController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {escrowValidation} = require('../../../validations/socket');

module.exports = (io, socket) => {

    socket.on('getEscrows', socketMiddleware(
        socketValidate(escrowValidation.getEscrows),
        escrowController.getEscrows
    )(io,socket));

    socket.on('getExchanges', socketMiddleware(
        socketValidate(escrowValidation.getExchanges),
        escrowController.getExchanges
    )(io,socket));

    socket.on('createExchange', socketMiddleware(
        socketValidate(escrowValidation.createExchange),
        escrowController.createExchange
    )(io,socket));

    socket.on('acceptExchange', socketMiddleware(
        socketValidate(escrowValidation.acceptExchange),
        escrowController.acceptExchange
    )(io,socket));

    socket.on('rejectExchange', socketMiddleware(
        socketValidate(escrowValidation.rejectExchange),
        escrowController.rejectExchange
    )(io,socket));

    socket.on('getNoShows', socketMiddleware(
        socketValidate(escrowValidation.getNoShows),
        escrowController.getNoShows
    )(io,socket));

    socket.on('createNoShow', socketMiddleware(
        socketValidate(escrowValidation.createNoShow),
        escrowController.createNoShow
    )(io,socket));

    socket.on('acceptNoShow', socketMiddleware(
        socketValidate(escrowValidation.acceptNoShow),
        escrowController.acceptNoShow
    )(io,socket));

    socket.on('rejectNoShow', socketMiddleware(
        socketValidate(escrowValidation.rejectNoShow),
        escrowController.rejectNoShow
    )(io,socket));

    socket.on('visitNoShow', socketMiddleware(
        socketValidate(escrowValidation.noShowVisit),
        escrowController.noShowVisit
    )(io,socket));

    socket.on('avoidNoShow', socketMiddleware(
        socketValidate(escrowValidation.noShowAvoid),
        escrowController.noShowAvoid
    )(io,socket));

    socket.on('getPromises', socketMiddleware(
        socketValidate(escrowValidation.getPromises),
        escrowController.getPromises
    )(io,socket));

    socket.on('createPromise', socketMiddleware(
        socketValidate(escrowValidation.createPromise),
        escrowController.createPromise
    )(io,socket));

    socket.on('acceptPromise', socketMiddleware(
        socketValidate(escrowValidation.acceptPromise),
        escrowController.acceptPromise
    )(io,socket));

    socket.on('rejectPromise', socketMiddleware(
        socketValidate(escrowValidation.rejectPromise),
        escrowController.rejectPromise
    )(io,socket));

    socket.on('breakPromise', socketMiddleware(
        socketValidate(escrowValidation.breakPromise),
        escrowController.breakPromise
    )(io,socket));

    socket.on('confirmPromise', socketMiddleware(
        socketValidate(escrowValidation.confirmPromise),
        escrowController.confirmPromise
    )(io,socket));


};

const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {tokenValidation} = require('../../../validations/socket');
const {tokenController} = require('../../../controllers/socket');
module.exports = (io, socket) => {
    socket.on('sendToken', socketMiddleware(
        socketValidate(tokenValidation.sendToken),
        tokenController.sendToken
    )(io,socket))

    socket.on('getTokenBalanceByTokenName', socketMiddleware(
        socketValidate(tokenValidation.getTokenBalanceByTokenName),
        tokenController.getTokenBalanceByTokenName
    )(io,socket))

    socket.on('getAllTokenBalance', socketMiddleware(
        socketValidate(tokenValidation.getAllTokenBalance),
        tokenController.getAllTokenBalance
    )(io,socket))

    socket.on('getTokenTransactionsByTokenName', socketMiddleware(
        socketValidate(tokenValidation.getTokenTransactionsByTokenName),
        tokenController.getTokenTransactionsByTokenName
    )(io,socket))
};

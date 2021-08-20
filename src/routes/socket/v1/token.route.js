const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {tokenValidation} = require('../../../validations/socket');
const {tokenController} = require('../../../controllers/socket');
module.exports = (io, socket) => {
    socket.on('sendToken', socketMiddleware(
        socketValidate(tokenValidation.sendToken),
        tokenController.sendToken
    )(io,socket))

    socket.on('getTokensBalance', socketMiddleware(
        socketValidate(tokenValidation.getTokensBalance),
        tokenController.getTokensBalance
    )(io,socket))

    socket.on('getTokenTransactionsByTokenName', socketMiddleware(
        socketValidate(tokenValidation.getTokenTransactionsByContractAddress),
        tokenController.getTokenTransactionsByContractAddress
    )(io,socket))
};

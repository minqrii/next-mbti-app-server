const {transactionController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    socket.on('getSendFailTransactions', socketMiddleware(
        socketValidate(transactionValidation.getSendFailTransactions),
        transactionController.getSendFailTransactions
    )(io,socket))
    socket.on('deleteSendFailTransactions', socketMiddleware(
        socketValidate(transactionValidation.deleteSendFailTransactions),
        transactionController.deleteSendFailTransactions
    )(io,socket))
};


const {transactionController} = require('../../../controllers/socket');
const socketMiddleware = require('../../../utils/socketMiddleware')
const socketValidate = require('../../../middlewares/socketValidate');
const {transactionValidation} = require('../../../validations/socket');
module.exports = (io, socket) => {
    socket.on('getSendFailTransactions', socketMiddleware(
        socketValidate(transactionValidation.getSendFailTransactions),
        transactionController.getSendFailTransactionsByAddress
    )(io,socket))
};

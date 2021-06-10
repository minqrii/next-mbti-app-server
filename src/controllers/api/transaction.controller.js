const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {} = require('../../services');

const sendTransactionResult = catchAsync(async (req, res) => {
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    req.app.io.to(req.body.from).emit(req.body.type+"Result", transactionResult)
    res.send("ok")
});

module.exports = {
    sendTransactionResult
};

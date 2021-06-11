const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendTransactionResult = catchAsync(async (req, res) => {
    //todo :: transaction 체크해서 redis 에 set
    let data = req.body
    if(req.body.transactionResult.data[0] === "blockchain timeout"){
        redisClient.selectAsync(config.redis.database.sendFailTransaction);
        redisClient.hmgetAsync(data.from, req.body.type)
            .then((result)=>{
                let stringifyTransaction;
                if(result!== null){
                    //이미 send fail이 존재하는 경우
                    stringifyTransaction = JSON.parse(result);
                    stringifyTransaction.push(req.body.transactionObject);
                    stringifyTransaction = JSON.stringify(stringifyTransaction)
                    redisClient.hmsetAsync(data.from, req.body.type, stringifyTransaction)
                }else{
                    //send fail이 한개도 없는 경우
                    stringifyTransaction = JSON.stringify([req.body.transactionObject])
                    redisClient.hmsetAsync(data.from, req.body.type, stringifyTransaction)
                }
            })
    }
    let transactionResult = {
        "status" : req.body.transactionResult.data[0],
        "tx_hash" : req.body.tx_hash
    }
    req.app.io.to(req.body.from).emit(req.body.type+"Result", transactionResult)
    res.send("ok")
});

const getSendFailTransactionsByAddress = catchAsync(async (req, res) => {
    redisClient.selectAsync(config.redis.database.sendFailTransaction);
    redisClient.hgetallAsync(req.address)
        .then((data)=>{
            res.send(data)
        })
});

module.exports = {
    sendTransactionResult,
    getSendFailTransactionsByAddress
};

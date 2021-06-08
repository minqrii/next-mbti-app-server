const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data) => {
    let toAddress = JSON.parse(data.transaction).data.to;
    let sendMessageStatus = await messageService.sendMessage(data)
    //emit to user who should receive message
    redisClient.selectAsync(config.redis.database.connectedUser);
    redisClient.saddAsync(toAddress,toAddress)
    redisClient.sinterAsync('connectedUser', toAddress)
        .then(async (res)=>{
            if(res.length!==0)
                io.to(toAddress).emit('sendMessage', sendMessageStatus)
            else
                let pushData = await pushService.makePushDataFromTransaction(toAddress, data);
                await pushService.sendPush(toAddress)
        }).catch((err)=>{
            throw err;
    })
    redisClient.delAsync(toAddress);
    //todo :: send message로 받은 경우에는 client 쪽에서 다시 메시지 리스트를 요청?
    //emit to user who sent message
    // socket.emit('sendMessage', sendMessageStatus)
});

const readMessage = socketCatchAsync(async (io, socket, data) => {
    let readMessageStatus = await messageService.readMessage(data)
    socket.emit('readMessage', readMessageStatus)
});

const getMessageCount = socketCatchAsync(async (io, socket, data) => {
    let messageCounts = await messageService.getMessageCount(data)
    socket.emit('getMessageCount', messageCounts)
});

const getMessageByAddress = socketCatchAsync(async (io, socket, data) => {
    let messages = await messageService.getMessageByAddress(data)
    socket.emit('getMessageByAddress', messages)
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessageByAddress
}
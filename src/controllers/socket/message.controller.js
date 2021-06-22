const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data) => {
    let fromAddress = JSON.parse(data.transaction).data.from;
    let sendMessageStatus = await messageService.sendMessage(data)
    io.to(fromAddress).emit('sendMessage', sendMessageStatus)
    //emit to user who should receive message
    /*
    redisClient.saddAsync("connectedUser"+toAddress,toAddress)
    redisClient.sinterAsync('connectedUser', "connectedUser"+toAddress)
        .then(async (res)=>{
            if(res.length!==0){
                io.to(toAddress).emit('sendMessage', sendMessageStatus)
            }
            else{
                //todo:: 여기있는 푸쉬 알림 로직은 accept 이후로 이동해야함.
                await pushService.sendPushNotification(toAddress)
            }
        }).catch((err)=>{
            throw err;
    })
    redisClient.delAsync("connectedUser"+toAddress);
    */

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

const getMessagesByAddress = socketCatchAsync(async (io, socket, data) => {
    let messages = await messageService.getMessagesByAddress(data)
    socket.emit('getMessagesByAddress', messages)
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress
}
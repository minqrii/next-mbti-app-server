const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data) => {
    console.log("send message")
    let sendMessageStatus = await messageService.sendMessage(data)
    socket.emit('sendMessage', sendMessageStatus)
    //todo :: 개발 후 delete
    socket.emit("log",'sendMessage')
});

const readMessage = socketCatchAsync(async (io, socket, data) => {
    let readMessageStatus = await messageService.readMessage(data)
    socket.emit('readMessage', readMessageStatus)
    //todo :: 개발 후 delete
    socket.emit("log",'readMessage')
});

const getMessageCount = socketCatchAsync(async (io, socket, data) => {
    let messageCounts = await messageService.getMessageCount(data)
    socket.emit('getMessageCount', messageCounts)
    //todo :: 개발 후 delete
    socket.emit("log",'getMessageCount')
    io.to('').emit('getMessageCount', messageCounts)
});

const getMessagesByAddress = socketCatchAsync(async (io, socket, data) => {
    let messages = await messageService.getMessagesByAddress(data)
    socket.emit('getMessagesByAddress', messages)
    //todo :: 개발 후 delete
    socket.emit("log",'getMessagesByAddress')
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress
}

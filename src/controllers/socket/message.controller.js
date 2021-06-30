const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data) => {
    console.log(data)
    console.log("send message")
    let sendMessageStatus = await messageService.sendMessage(data)
    socket.emit('sendMessage', sendMessageStatus)
});

const readMessage = socketCatchAsync(async (io, socket, data) => {
    console.log(data)
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
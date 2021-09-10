const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data) => {
    console.log("send message")
    let sendMessageStatus = await messageService.sendMessage(data);
    // callback(sendMessageStatus);
    socket.emit('sendMessage', sendMessageStatus);
});

const readMessage = socketCatchAsync(async (io, socket, data) => {
    let readMessageStatus = await messageService.readMessage(data);
    // callback(readMessageStatus);
    socket.emit('readMessage', readMessageStatus);
});

const getMessageCount = socketCatchAsync(async (io, socket, data) => {
    let messageCounts = await messageService.getMessageCount(data);
    socket.emit('getMessageCount', messageCounts);
    // callback(messageCounts);
});

const getMessagesByAddress = socketCatchAsync(async (io, socket, data) => {
    let messages = await messageService.getMessagesByAddress(data);
    // callback(messages);
    socket.emit('getMessagesByAddress', messages);
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress
}

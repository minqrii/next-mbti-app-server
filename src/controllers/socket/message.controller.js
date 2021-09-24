const socketCatchAsync = require('../../utils/socketCatchAsync')
const {messageService, pushService} = require('../../services/index')
const redisClient = require('../../config/database/redis')
const config = require('../../config/config')

const sendMessage = socketCatchAsync(async (io, socket, data, callback) => {
    let sendMessageStatus = await messageService.sendMessage(data);
   callback(sendMessageStatus)
});

const readMessage = socketCatchAsync(async (io, socket, data, callback) => {
    let readMessageStatus = await messageService.readMessage(data);
    callback(readMessageStatus);
});

const getMessageCount = socketCatchAsync(async (io, socket, data, callback) => {
    let messageCounts = await messageService.getMessageCount(data);
    callback(messageCounts);
});

const getMessagesByAddress = socketCatchAsync(async (io, socket, data, callback) => {
    let messages = await messageService.getMessagesByAddress(data);
    callback(messages);
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress
}

const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {messageService} = require('../../services');

const sendMessage = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const registerSpamStatus = await messageService.sendMessage(data);
    res.json(registerSpamStatus)
});

const readMessage = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const readMessageStatus = await messageService.readMessage(data);
    res.json(readMessageStatus)
});

const getMessageCount = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const messageCount = await messageService.getMessageCount(data);
    res.json(messageCount)
});

const getMessagesByAddress = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const messageData = await messageService.getMessagesByAddress(data);
    res.json(messageData)
});

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress,
};

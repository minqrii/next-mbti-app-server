const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {messageService} = require('../../services');

const sendMessage = catchAsync(async (req, res) => {
    const registerSpamStatus = await messageService.sendMessage(req.data);
    res.json(registerSpamStatus)
});

const readMessage = catchAsync(async (req, res) => {
    const readMessageStatus = await messageService.readMessage(req.data);
    res.json(readMessageStatus)
});

const getMessageCount = catchAsync(async (req, res) => {
    const messageCount = await messageService.getMessageCount(req.query);
    res.json(messageCount)
});

const getMessagesByAddress = catchAsync(async (req, res) => {
    const messageData = await messageService.getMessagesByAddress(req.query);
    res.json(messageData)
});

const test = catchAsync(async (req,res) => {
    let testData = await messageService.test2()
    await res.send(testData)
})

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessagesByAddress,
    test
};

const socketCatchAsync = require('../../utils/socketCatchAsync')
const {escrowService} = require('../../services/index')

const getEscrows= socketCatchAsync(async (io, socket, data, callback) => {
    const getEscrowsResult = await escrowService.getEscrows(data);
    callback(getEscrowsResult);
})

const createExchange= socketCatchAsync(async (io, socket, data, callback) => {
    const createExchangeStatus = await escrowService.createExchange(data);
    callback(createExchangeStatus);
})

const acceptExchange= socketCatchAsync(async (io, socket, data, callback) => {
    const acceptExchangeStatus = await escrowService.acceptExchange(data);
    callback(acceptExchangeStatus);
})

const rejectExchange= socketCatchAsync(async (io, socket, data, callback) => {
    const rejectExchangeStatus = await escrowService.rejectExchange(data);
    callback(rejectExchangeStatus);
})

const createNoShow= socketCatchAsync(async (io, socket, data, callback) => {
    const createNoShowStatus = await escrowService.createNoShow(data);
    callback(createNoShowStatus);
})

const acceptNoShow= socketCatchAsync(async (io, socket, data, callback) => {
    const acceptNoShowStatus = await escrowService.acceptNoShow(data);
    callback(acceptNoShowStatus);
})

const rejectNoShow= socketCatchAsync(async (io, socket, data, callback) => {
    const rejectNoShowStatus = await escrowService.rejectNoShow(data);
    callback(rejectNoShowStatus);
})

const visitNoShow= socketCatchAsync(async (io, socket, data, callback) => {
    const visitNoShowStatus = await escrowService.visitNoShow(data);
    callback(visitNoShowStatus);
})

const avoidNoShow= socketCatchAsync(async (io, socket, data, callback) => {
    const avoidNoShowStatus = await escrowService.avoidNoShow(data);
    callback(avoidNoShowStatus);
})

const createPromise= socketCatchAsync(async (io, socket, data, callback) => {
    const createPromiseStatus = await escrowService.createPromise(data);
    callback(createPromiseStatus);
})

const acceptPromise= socketCatchAsync(async (io, socket, data, callback) => {
    const acceptPromiseStatus = await escrowService.acceptPromise(data);
    callback(acceptPromiseStatus);
})

const rejectPromise= socketCatchAsync(async (io, socket, data, callback) => {
    const rejectPromiseStatus = await escrowService.rejectPromise(data);
    callback(rejectPromiseStatus);
})

const breakPromise= socketCatchAsync(async (io, socket, data, callback) => {
    const breakPromiseStatus = await escrowService.breakPromise(data);
    callback(breakPromiseStatus);
})

const confirmPromise= socketCatchAsync(async (io, socket, data, callback) => {
    const confirmPromiseStatus = await escrowService.confirmPromise(data);
    callback(confirmPromiseStatus);
})

module.exports = {
    getEscrows,
    createExchange,
    acceptExchange,
    rejectExchange,
    createNoShow,
    acceptNoShow,
    rejectNoShow,
    visitNoShow,
    avoidNoShow,
    createPromise,
    acceptPromise,
    rejectPromise,
    breakPromise,
    confirmPromise
}

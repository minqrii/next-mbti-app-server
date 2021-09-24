const socketCatchAsync = require('../../utils/socketCatchAsync')
const {escrowService} = require('../../services/index')

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

const noShowVisit= socketCatchAsync(async (io, socket, data, callback) => {
    const noShowVisitStatus = await escrowService.noShowVisit(data);
    callback(noShowVisitStatus);
})

const noShowAvoid= socketCatchAsync(async (io, socket, data, callback) => {
    const noShowAvoidStatus = await escrowService.noShowAvoid(data);
    callback(noShowAvoidStatus);
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

module.exports = {
    createExchange,
    acceptExchange,
    rejectExchange,
    createNoShow,
    acceptNoShow,
    rejectNoShow,
    noShowVisit,
    noShowAvoid,
    createPromise,
    acceptPromise,
    rejectPromise
}

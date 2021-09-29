const catchAsync = require('../../utils/catchAsync');
const {escrowService} = require('../../services');

const getEscrows = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const getEscrowsResult = await escrowService.getEscrows(data);
    res.send(getEscrowsResult)
})

const createExchange = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const createExchangeStatus = await escrowService.createExchange(data);
    res.send(createExchangeStatus)
})

const acceptExchange = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const acceptExchangeStatus = await escrowService.acceptExchange(data);
    res.send(acceptExchangeStatus)
})

const rejectExchange = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const rejectExchangeStatus = await escrowService.rejectExchange(data);
    res.send(rejectExchangeStatus)
})

const createNoShow = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const createNoShowStatus = await escrowService.createNoShow(data);
    res.send(createNoShowStatus)
})

const acceptNoShow = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const acceptNoShowStatus = await escrowService.acceptNoShow(data);
    res.send(acceptNoShowStatus)
})

const rejectNoShow = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const rejectNoShowStatus = await escrowService.rejectNoShow(data);
    res.send(rejectNoShowStatus)
})

const noShowVisit = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const noShowVisitStatus = await escrowService.noShowVisit(data);
    res.send(noShowVisitStatus)
})

const noShowAvoid = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const noShowAvoidStatus = await escrowService.noShowAvoid(data);
    res.send(noShowAvoidStatus)
})

const createPromise = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const createPromiseStatus = await escrowService.createPromise(data);
    res.send(createPromiseStatus)
})

const acceptPromise = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const acceptPromiseStatus = await escrowService.acceptPromise(data);
    res.send(acceptPromiseStatus)
})

const rejectPromise = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const rejectPromiseStatus = await escrowService.rejectPromise(data);
    res.send(rejectPromiseStatus)
})

const breakPromise = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const breakPromiseStatus = await escrowService.breakPromise(data);
    res.send(breakPromiseStatus)
})

const confirmPromise = catchAsync(async (req,res)=> {
    const data = {...req.query, ...req.body, ...req.params}
    const confirmPromiseStatus = await escrowService.confirmPromise(data);
    res.send(confirmPromiseStatus)
})


module.exports = {
    getEscrows,
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
    rejectPromise,
    breakPromise,
    confirmPromise
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const walletAppServer = require('../utils/walletAppServer');

const createExchange = async function(data) {
    try{
        const createExchangeStatus = await walletAppServer.post(`/v1/escrow/exchange`, data)
        return createExchangeStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const acceptExchange = async function(data) {
    try{
        const acceptExchangeStatus = await walletAppServer.post(`/v1/escrow/exchange/accept`, data)
        return acceptExchangeStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const rejectExchange = async function(data) {
    try{
        const rejectExchangeStatus = await walletAppServer.post(`/v1/escrow/exchange/reject`, data)
        return rejectExchangeStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const createNoShow = async function(data) {
    try{
        const createNoShowStatus = await walletAppServer.post(`/v1/escrow/no-show`, data)
        return createNoShowStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const acceptNoShow = async function(data) {
    try{
        const acceptNoShowStatus = await walletAppServer.post(`/v1/escrow/no-show/accept`, data)
        return acceptNoShowStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const rejectNoShow = async function(data) {
    try{
        const rejectNoShowStatus = await walletAppServer.post(`/v1/escrow/no-show/reject`, data)
        return rejectNoShowStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const noShowVisit = async function(data) {
    try{
        const noShowVisitStatus = await walletAppServer.post(`/v1/escrow/no-show/visit`, data)
        return noShowVisitStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const noShowAvoid = async function(data) {
    try{
        const noShowAvoidStatus = await walletAppServer.post(`/v1/escrow/no-show/avoid`, data)
        return noShowAvoidStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const createPromise = async function(data) {
    try{
        const createPromiseStatus = await walletAppServer.post(`/v1/escrow/promise`, data)
        return createPromiseStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const acceptPromise = async function(data) {
    try{
        const acceptPromiseStatus = await walletAppServer.post(`/v1/escrow/promise/accept`, data)
        return acceptPromiseStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

const rejectPromise = async function(data) {
    try{
        const rejectPromiseStatus = await walletAppServer.post(`/v1/escrow/promise/reject`, data)
        return rejectPromiseStatus.data;
    }catch(err){
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network')
    }
}

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

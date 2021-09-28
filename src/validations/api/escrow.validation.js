const joi = require('joi');
const transactionValidation = require('./transaction.validation');

const getExchanges = {
    query: joi.object().keys({
        serviceName: joi.string().required(),
        networkId: joi.string().required(),
        contractAddress: joi.string().required(),
        count : joi.number().required(),
        exchangeRequestId: joi.number().required(),
        address: joi.string(),
        requesterAddress: joi.string(),
        opponentAddress: joi.string(),
        status: joi.number()
    })
}

const createExchange = transactionValidation.transactionPayload;

const acceptExchange = transactionValidation.transactionPayload;

const rejectExchange = transactionValidation.transactionPayload;

const getNoShows = {
    query: joi.object().keys({
        serviceName: joi.string().required(),
        networkId: joi.string().required(),
        contractAddress: joi.string().required(),
        count : joi.number().required(),
        noShowRequestId: joi.number().required(),
        address: joi.string(),
        requesterAddress: joi.string(),
        opponentAddress: joi.string(),
        status: joi.number()
    })
}

const createNoShow = transactionValidation.transactionPayload;

const acceptNoShow = transactionValidation.transactionPayload;

const rejectNoShow = transactionValidation.transactionPayload;

const noShowVisit = transactionValidation.transactionPayload;

const noShowAvoid = transactionValidation.transactionPayload;

const getPromises = {
    query: joi.object().keys({
        serviceName: joi.string().required(),
        networkId: joi.string().required(),
        contractAddress: joi.string().required(),
        count : joi.number().required(),
        promiseRequestId: joi.number().required(),
        address: joi.string(),
        requesterAddress: joi.string(),
        opponentAddress: joi.string(),
        status: joi.number()
    })
}

const createPromise = transactionValidation.transactionPayload;

const acceptPromise = transactionValidation.transactionPayload;

const rejectPromise = transactionValidation.transactionPayload;

const breakPromise = transactionValidation.transactionPayload;

const confirmPromise = transactionValidation.transactionPayload;


module.exports = {
    getExchanges,
    createExchange,
    acceptExchange,
    rejectExchange,
    getNoShows,
    createNoShow,
    acceptNoShow,
    rejectNoShow,
    noShowVisit,
    noShowAvoid,
    getPromises,
    createPromise,
    acceptPromise,
    rejectPromise,
    breakPromise,
    confirmPromise
};

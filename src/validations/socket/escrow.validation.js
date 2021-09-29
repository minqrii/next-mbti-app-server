const joi = require('joi');
const transactionValidation = require('./transaction.validation');

const getEscrows = joi.object().keys({
    serviceName: joi.string().required().valid('SLUSH'),
    networkId: joi.string().required(),
    contractAddressQuery: joi.string().required(),
    count : joi.number().required(),
    id: joi.number().required(),
    address: joi.string(),
    requesterAddress: joi.string(),
    opponentAddress: joi.string(),
    type: joi.array().required(),
    status: joi.array().required()
});

const createExchange = transactionValidation.transactionPayload;

const acceptExchange = transactionValidation.transactionPayload;

const rejectExchange = transactionValidation.transactionPayload;

const createNoShow = transactionValidation.transactionPayload;

const acceptNoShow = transactionValidation.transactionPayload;

const rejectNoShow = transactionValidation.transactionPayload;

const noShowVisit = transactionValidation.transactionPayload;

const noShowAvoid = transactionValidation.transactionPayload;

const createPromise = transactionValidation.transactionPayload;

const acceptPromise = transactionValidation.transactionPayload;

const rejectPromise = transactionValidation.transactionPayload;

const breakPromise = transactionValidation.transactionPayload;

const confirmPromise = transactionValidation.transactionPayload;

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

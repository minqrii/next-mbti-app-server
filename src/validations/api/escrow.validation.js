const transactionValidation = require('./transaction.validation');

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
};

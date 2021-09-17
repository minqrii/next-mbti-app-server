const express = require('express');
const validate = require('../../../middlewares/validate');
const {escrowValidation} = require('../../../validations/api');
const {escrowController} = require('../../../controllers/api');

const router = express.Router();

//[trx] exchange 등록
router
    .route('/exchange')
    .post(validate(escrowValidation.createExchange),escrowController.createExchange);

//[trx] exchange accept
router
    .route('/exchange/accept')
    .post(validate(escrowValidation.acceptExchange),escrowController.acceptExchange);

//[trx] exchange reject
router
    .route('/exchange/reject')
    .post(validate(escrowValidation.rejectExchange),escrowController.rejectExchange);

//[trx] no-show 등록
router
    .route('/no-show')
    .post(validate(escrowValidation.createNoShow),escrowController.createNoShow)

//[trx] no-show 수락
router
    .route('/no-show/accept')
    .post(validate(escrowValidation.acceptNoShow),escrowController.acceptNoShow)

//[trx] no-show 거절
router
    .route('/no-show/reject')
    .post(validate(escrowValidation.rejectNoShow),escrowController.rejectNoShow)

//[trx] no-show 방문
router
    .route('/no-show/visit')
    .post(validate(escrowValidation.noShowVisit),escrowController.noShowVisit)

//[trx] no-show 를 함
router
    .route('/no-show/avoid')
    .post(validate(escrowValidation.noShowAvoid),escrowController.noShowAvoid)

//[trx] promise 등록
router
    .route('/promise')
    .get(validate(escrowValidation.createPromise),escrowController.createPromise)

//[trx] promise 수락
router
    .route('/promise/accept')
    .get(validate(escrowValidation.acceptPromise),escrowController.acceptPromise)

//[trx] promise 거절
router
    .route('/promise/reject')
    .get(validate(escrowValidation.rejectPromise),escrowController.rejectPromise)

module.exports = router;

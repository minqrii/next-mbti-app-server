const express = require('express');
const validate = require('../../../middlewares/validate');
const {escrowValidation} = require('../../../validations/api');
const {escrowController} = require('../../../controllers/api');

const router = express.Router();

// escrow 조회
router
    .route('/')
    .get(validate(escrowValidation.getEscrows), escrowController.getEscrows)

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
    .post(validate(escrowValidation.visitNoShow),escrowController.visitNoShow)

//[trx] no-show 를 함
router
    .route('/no-show/avoid')
    .post(validate(escrowValidation.avoidNoShow),escrowController.avoidNoShow)

//[trx] promise 등록
router
    .route('/promise')
    .post(validate(escrowValidation.createPromise),escrowController.createPromise)

//[trx] promise 수락
router
    .route('/promise/accept')
    .post(validate(escrowValidation.acceptPromise),escrowController.acceptPromise)

//[trx] promise 거절
router
    .route('/promise/reject')
    .post(validate(escrowValidation.rejectPromise),escrowController.rejectPromise)

//[trx] promise 취소
router
    .route('/promise/break')
    .post(validate(escrowValidation.breakPromise),escrowController.breakPromise)

//[trx] promise 확인
router
    .route('/promise/confirm')
    .post(validate(escrowValidation.confirmPromise),escrowController.confirmPromise)


module.exports = router;

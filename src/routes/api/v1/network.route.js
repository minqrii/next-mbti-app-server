const express = require('express');
const validate = require('../../../middlewares/validate');
const {networkValidation} = require('../../../validations/api');
const {networkController} = require('../../../controllers/api');

const router = express.Router();

router
    //todo:: server 수정
    .route('/:serviceName')
    .get(validate(networkValidation.getNetworks), networkController.getNetworks)

module.exports = router;

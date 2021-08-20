const express = require('express');
const validate = require('../../../middlewares/validate');
const {networkValidation} = require('../../../validations/api');
const {networkController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/:server')
    .get(validate(networkValidation.getNetworks), networkController.getNetworks)
    .post(validate(networkValidation.addNetwork), networkController.addNetwork)
    .delete(validate(networkValidation.deleteNetwork), networkController.deleteNetwork)


module.exports = router;

const express = require('express');
const validate = require('../../../middlewares/validate');
const {connectionValidation} = require('../../../validations/api');
const {connectionController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/')
    .get(validate(connectionValidation.getConnectionByAddress), connectionController.getConnectionByAddress);

module.exports = router;

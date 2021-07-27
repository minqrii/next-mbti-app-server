const express = require('express');
const validate = require('../../../middlewares/validate');
const {userValidation, transactionValidation} = require('../../../validations/api');
const {userController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/spam/register')
    .post(validate(userValidation.transactionPayload), userController.registerSpamUser);

router
    .route('/spam/deregister')
    .post(validate(userValidation.transactionPayload),userController.deregisterSpamUser)

router
    .route('/friends')
    .post(validate(userValidation.exportUserFriends),userController.exportUserFriends)
    .get(validate(userValidation.importUserFriends), userController.importUserFriends)

router
    .route('/:address/spam')
    .post(validate(userValidation.getSpamUsers),userController.getSpamUsers)


module.exports = router;

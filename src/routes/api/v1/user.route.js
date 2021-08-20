const express = require('express');
const validate = require('../../../middlewares/validate');
const {userValidation} = require('../../../validations/api');
const {userController} = require('../../../controllers/api');

const router = express.Router();

router
    .route('/spam/register')
    .post(validate(userValidation.registerSpamUser), userController.registerSpamUser);

router
    .route('/spam/deregister')
    .post(validate(userValidation.deregisterSpamUser),userController.deregisterSpamUser)

router
    .route('/friends')
    .post(validate(userValidation.exportUserFriends),userController.exportUserFriends)
    .get(validate(userValidation.importUserFriends), userController.importUserFriends)

router
    .route('/:address/spam')
    .get(validate(userValidation.getSpamUsers),userController.getSpamUsers)


module.exports = router;

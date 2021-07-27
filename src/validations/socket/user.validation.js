const joi = require('joi');
const customValidation = require('./custom.validation');

const getSpamUsers = joi.object().keys({
    address : joi.string().required().custom(customValidation.address)
});

const exportUserFriends = joi.object().keys({
    userId : joi.string().required(),
    data : joi.string().required()
});

const importUserFriends = joi.object().keys({
    userId : joi.string().required()
});

module.exports = {
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

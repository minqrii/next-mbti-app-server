const joi = require('joi');
const customValidation = require('./custom.validation');

const getSpamUsers = joi.object().keys({
    address : joi.string().required().custom(customValidation.address)
});

const exportUserFriends = joi.object().keys({

});

const importUserFriends = joi.object().keys({

});

module.exports = {
    getSpamUsers,
    exportUserFriends,
    importUserFriends
};

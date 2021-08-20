const joi = require('joi');

const getNetworks = {
    params : joi.object().keys({
        server : joi.string().required().allow('whisper', 'wallet', 'all')
    })
}

const addNetwork = {
    params : joi.object().keys({
        server : joi.string().required().allow('whisper', 'wallet')
    }),
    body : joi.object().keys({
        networkId : joi.number().required()
    })
}

const deleteNetwork = {
    params : joi.object().keys({
        server : joi.string().required().allow('whisper', 'wallet')
    }),
    query : joi.object().keys({
        networkId : joi.number().required()
    })
}

module.exports = {
    getNetworks,
    addNetwork,
    deleteNetwork
};

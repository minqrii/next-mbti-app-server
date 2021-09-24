const joi = require('joi');

const getNetworks = {
    params : joi.object().keys({
        server : joi.string().required().allow('whisper', 'wallet', 'nft'),
    }),
    query : joi.object().keys({
        serviceName : joi.string().required().allow('SLUSH', 'WHISPER', 'NFT')
    })
}

module.exports = {
    getNetworks,
};

const joi = require('joi');

const getNetworks = {
  serviceName: joi.string().required().allow('SLUSH', 'WHISPER', 'NFT')
}

module.exports = {
  getNetworks,
};

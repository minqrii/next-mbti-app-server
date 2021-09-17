const axios = require('axios');
const config = require('../config/config');

const marketPriceAppServerAddr = config.marketPriceAppServerAddr;

const marketPriceAppServer = {};

marketPriceAppServer.post = function (path, data, config) {
   return axios.post('http://' +  marketPriceAppServerAddr + path, data, config);
};

marketPriceAppServer.get = function (path, config) {
   return axios.get('http://' + marketPriceAppServerAddr + path, config);
};

marketPriceAppServer.put = function (path, data, config) {
   return axios.put('http://' + marketPriceAppServerAddr + path, data, config);
};

marketPriceAppServer.delete = function (path, config) {
   return axios.delete('http://' + marketPriceAppServerAddr + path, config);
};

module.exports = marketPriceAppServer;
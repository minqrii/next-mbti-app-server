const axios = require('axios');
const config = require('../config/config');

const walletAppServerAddr = config.walletAppServerAddr;

const walletAppServer = {};

walletAppServer.post = function (path, data, config) {
    return axios.post('http://' +  walletAppServerAddr + path, data, config);
};

walletAppServer.get = function (path, config) {
    return axios.get('http://' + walletAppServerAddr + path, config);
};

walletAppServer.put = function (path, data, config) {
    return axios.put('http://' + walletAppServerAddr + path, data, config);
};

walletAppServer.delete = function (path, config) {
    return axios.delete('http://' + walletAppServerAddr + path, config);
};

module.exports = walletAppServer;

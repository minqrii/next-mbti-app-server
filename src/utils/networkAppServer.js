const axios = require('axios');
const config = require('../config/config');

const networkAppServerAddr = config.networkAppServerAddr;

const networkAppServer = {};

networkAppServer.post = function (path, data, config) {
    return axios.post('http://' +  networkAppServerAddr + path, data, config);
};

networkAppServer.get = function (path, config) {
    return axios.get('http://' + networkAppServerAddr + path, config);
};

networkAppServer.put = function (path, data, config) {
    return axios.put('http://' + networkAppServerAddr + path, data, config);
};

networkAppServer.delete = function (path, config) {
    return axios.delete('http://' + networkAppServerAddr + path, config);
};

module.exports = networkAppServer;

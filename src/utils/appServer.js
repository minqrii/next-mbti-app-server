const axios = require('axios');
const config = require('../config/config');

const appServerAddr = config.appServerAddr;

const appServer = {};

appServer.post = function (path, data, config) {
    return axios.post('http://' + appServerAddr + path, data, config);
};

appServer.get = function (path, config) {
    return axios.get('http://' +appServerAddr + path, config);
};

appServer.put = function (path, data, config) {
    return axios.put('http://' +appServerAddr + path, data, config);
};

appServer.delete = function (path, config) {
    return axios.delete('http://' +appServerAddr + path, config);
};

module.exports = appServer;

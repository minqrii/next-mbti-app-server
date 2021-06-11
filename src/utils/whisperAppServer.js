const axios = require('axios');
const config = require('../config/config');

const whisperAppServerAddr = config.whisperAppServerAddr;

const whisperAppServer = {};

whisperAppServer.post = function (path, data, config) {
    return axios.post('http://' + whisperAppServerAddr + path, data, config);
};

whisperAppServer.get = function (path, config) {
    return axios.get('http://' +whisperAppServerAddr + path, config);
};

whisperAppServer.put = function (path, data, config) {
    return axios.put('http://' +whisperAppServerAddr + path, data, config);
};

whisperAppServer.delete = function (path, config) {
    return axios.delete('http://' +whisperAppServerAddr + path, config);
};

module.exports = whisperAppServer;

const axios = require('axios');
const config = require('../config/config');

const alarmAppServerAddr = config.alarmAppServerAddr;

const alarmAppServer = {};

alarmAppServer.post = function (path, data, config) {
    return axios.post('http://' +  alarmAppServerAddr + path, data, config);
};

alarmAppServer.get = function (path, config) {
    return axios.get('http://' + alarmAppServerAddr + path, config);
};

alarmAppServer.put = function (path, data, config) {
    return axios.put('http://' + alarmAppServerAddr + path, data, config);
};

alarmAppServer.delete = function (path, config) {
    return axios.delete('http://' + alarmAppServerAddr + path, config);
};

module.exports = alarmAppServer;

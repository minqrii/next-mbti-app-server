const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');
const networkAppServer = require('../utils/networkAppServer');


const getNetworks = async function(data){
    const getNetworksResult = await networkAppServer.get(`/v1/networks/service?serviceName=${data.serviceName}`);
    return getNetworksResult.data;
}

module.exports = {
    getNetworks
}


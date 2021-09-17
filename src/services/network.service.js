const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');


const getNetworks = async function(data){
    const path = '/v1/networks'
    const serviceName = '?serviceName=' + data.serviceName
    let promiseArray = [];
    switch(data.server){
        case 'whisper' :
            promiseArray.push(await whisperAppServer.get(path + serviceName).then((result)=> result.data))
            break;
        case 'wallet' :
            promiseArray.push(await walletAppServer.get(path + serviceName).then((result)=> result.data))
            break;
        default :
            break;
    }
    return await Promise.all(promiseArray)
        .then((result) => result)
        .catch((err) => {throw (err)})
}

const addNetwork = async function(data) {
    const path = '/v1/networks'
    const body = (({server, ...obj})=> obj) (data)
    switch (data.server) {
        case 'whisper' :
            const addWhisperNetworkResponse = await whisperAppServer.post(path, body)
            return addWhisperNetworkResponse.data
        case 'wallet' :
            const addWalletNetworkResponse = await walletAppServer.post(path, body)
            return addWalletNetworkResponse.data
        default :
            throw new Error('server unavailable')
    }
}

const deleteNetwork = async function(data){
    const path = '/v1/networks' + '?networkId=' + data.networkId
    switch (data.server) {
        case 'whisper' :
            const deleteWhisperNetworkResponse = await whisperAppServer.delete(path)
            return deleteWhisperNetworkResponse.data
        case 'wallet' :
            const deleteWalletNetworkResponse = await walletAppServer.delete(path)
            return deleteWalletNetworkResponse.data;
        default :
            throw new Error('server unavailable')
    }
}

module.exports = {
    getNetworks,
    addNetwork,
    deleteNetwork
}


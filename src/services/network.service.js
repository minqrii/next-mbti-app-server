const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');


const getNetworks = async function(data){
    const path = '/v1/networks/'
    let promiseArray = [];
    switch(data.server){
        case 'whisper' :
            promiseArray.concat(await whisperAppServer.get(path).then((result)=> result.data))
            break;
        case 'wallet' :
            promiseArray.concat(await walletAppServer.get(path).then((result)=> result.data))
            break;
        default :
            promiseArray.concat(await whisperAppServer.get(path).then((result)=> result.data))
            promiseArray.concat(await walletAppServer.get(path).then((result)=> result.data))
            break;
    }
    return await Promise.all(promiseArray)
        .then(result => result)
        .catch((err) => {throw (err)})

}

const addNetwork = async function(data) {
    const path = '/v1/networks'
    const body = (({server, ...obj})=> obj) (data)
    switch (data.server) {
        case 'whisper' :
            return await whisperAppServer.post(path, body)
        case 'wallet' :
            return await walletAppServer.post(path, body)
        default :
            throw new Error('server unavailable')
    }
}

const deleteNetwork = async function(data){
    const path = '/v1/networks' + '?networkId=' + data.networkId
    switch (data.server) {
        case 'whisper' :
            return await whisperAppServer.delete(path)
        case 'wallet' :
            return await walletAppServer.delete(path)
        default :
            throw new Error('server unavailable')
    }
}

module.exports = {
    getNetworks,
    addNetwork,
    deleteNetwork
}


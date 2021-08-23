const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/whisperAppServer');
const walletAppServer = require('../utils/walletAppServer');
const moment = require('moment')
const {makeQuery} = require('../config/query');

const getNotificationsByTimestamp = async function (data) {
    try {
        return await getNotifications(data.address, data.whisperTimestamp, data.walletTimestamp, data.contractAddresses)
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

//todo::수정 (하나는 eqt, 하나는 weth)
const getNotifications = async function(address, whisperTimestamp, walletTimestamp, contractAddresses){
    const query = await makeQuery(contractAddresses);

    whisperTimestamp ??= moment().subtract(7, 'day').unix() * 1000
    walletTimestamp ??= moment().subtract(7, 'day').unix() * 1000
    let promiseArray = [whisperTimestamp, walletTimestamp].map(async (timestamp, index) =>
        index === 0 ? Promise.resolve(await whisperAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}`).then((result)=> result.data)) :
            Promise.resolve(await walletAppServer.get(`/v1/notifications/${address}?timestamp=${timestamp}` + query).then((result)=>result.data))
    )
    // const result =  await walletAppServer.get(`/v1/notifications/${address}?timestamp=${walletTimestamp}` + query)
    // return [{data:[]},result.data];
    return await Promise.all(promiseArray)
        .then(result => result)
        .catch((err) => {throw (err)})
}

module.exports = {
    getNotificationsByTimestamp
}


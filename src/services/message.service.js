const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const whisperAppServer = require('../utils/appServer');

const sendMessage = async function (data) {
    try {
        const sendMessageStatus = await whisperAppServer.post(`/v1/messages/send`,data);
        return sendMessageStatus.data.success;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const readMessage = async function (data) {
    try {
        const readMessageStatus = await whisperAppServer.post(`/v1/messages/read`,data);
        return readMessageStatus.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getMessageCount = async function (data) {
    try {
        const messageCount = await whisperAppServer.get(`/v1/messages/${data.address}/count`);
        return messageCount.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const getMessageByAddress = async function (data) {
    try {
        const messageData = await whisperAppServer.get(`/v1/messages/${data.address}/address/${data.toAddress}`);
        return messageData.data;
    } catch (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
};

const test = async function () {
    try {
        let interval=0;
        let testDataList = [];
        let testData;
        let new_interval = await setInterval(async function (){
            try{
                interval++

                if(interval === 11){
                    console.log('here1')
                    console.log(testDataList)
                    clearInterval(new_interval);
                    return testDataList
                }else{
                    testData = await whisperAppServer.post(`/v1/messages/test`);
                }
                testDataList.push(testData.data)
            }catch{
                console.log('here2')
                clearInterval(new_interval)
                return new Error('b/c error')
            }
        } , 1000)
    } catch (err) {
        console.log('here3')
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }
}


const test2 = async function () {
    try{
        return new Promise(async (resolve, reject)=>{
            try {
                let interval=0;
                let testDataList = [];
                let testData;
                let new_interval = await setInterval(async function (){
                    try{
                        interval++

                        if(interval === 11){
                            clearInterval(new_interval);
                            resolve (testDataList)
                        }else{
                            testData = await whisperAppServer.post(`/v1/messages/test`);
                        }
                        testDataList.push(testData.data)
                    }catch{
                        clearInterval(new_interval)
                        reject (new Error('b/c error'))
                    }
                } , 1000)
            } catch (err) {
                reject(new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network'))
            }
        })
    }catch{
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Please check network');
    }

}

module.exports = {
    sendMessage,
    readMessage,
    getMessageCount,
    getMessageByAddress,
    test,
    test2
};

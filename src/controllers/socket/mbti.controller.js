const socketCatchAsync = require('../../utils/socketCatchAsync')
const {mbtiService} = require('../../services')

const sendAnswer = socketCatchAsync(async (io, socket, data, callback) => {
   const sendAnswerResult = await mbtiService.sendAnswer(data);
       io.of("/").emit("getAnswerResult", sendAnswerResult)
});

const changePageIdx = socketCatchAsync(async (io, socket, data, callback) => {
   let testServiceResult = await mbtiService.changePageIdx(data);
   io.of("/").emit("getPageIdx", testServiceResult)
});

module.exports = {
   sendAnswer,
   changePageIdx
}

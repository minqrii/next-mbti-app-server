const socketCatchAsync = require('../../utils/socketCatchAsync')
const {mbtiService} = require('../../services')

const sendAnswer = socketCatchAsync(async (io, socket, data, callback) => {
   let sendAnswerResult = await mbtiService.sendAnswer(data);
   io.of("/").emit("getAnswerResult", sendAnswerResult)
});

const changePageIdx = socketCatchAsync(async (io, socket, data, callback) => {
   const pageIdxChanged = await mbtiService.changePageIdx(data);
   io.of("/").emit("getPageIdx", pageIdxChanged)
});

module.exports = { 
   sendAnswer,
   changePageIdx
}

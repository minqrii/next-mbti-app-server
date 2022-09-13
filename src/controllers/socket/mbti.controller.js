const socketCatchAsync = require('../../utils/socketCatchAsync')
const {mbtiService} = require('../../services')

const sendAnswer = socketCatchAsync(async (io, socket, data, callback) => {
   const sendAnswerResult = await mbtiService.sendAnswer(data);
   console.log(data);
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

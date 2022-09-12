const socketCatchAsync = require('../../utils/socketCatchAsync')
const {mbtiService} = require('../../services')

const testController = socketCatchAsync(async (io, socket, data, callback) => {
   let testServiceResult = await mbtiService.testService(data);
   socket.emit("testService", testServiceResult)
   callback(testServiceResult);
});

const miziController = socketCatchAsync(async (io, socket, data, callback) => {
   let testServiceResult = await mbtiService.testService(data);
   socket.emit("testService", testServiceResult)
   callback(testServiceResult);
});

module.exports = {
   testController,
   miziController
}

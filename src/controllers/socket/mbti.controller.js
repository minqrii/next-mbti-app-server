const socketCatchAsync = require('../../utils/socketCatchAsync')
const {mbtiService} = require('../../services/index')

const testController = socketCatchAsync(async (io, socket, data, callback) => {
   let testServiceResult = await mbtiService.testService(data);
   callback(testServiceResult);
});

module.exports = {
   testController
}

const socketCatchAsync = require('../../utils/socketCatchAsync')
const {networkService} = require('../../services/index')

const getNetworks = socketCatchAsync(async (io, socket, data, callback) => {
  let getNetworksResult = await networkService.getNetworks(data);
  callback(getNetworksResult)
});

module.exports = {
  getNetworks
}

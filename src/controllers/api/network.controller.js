const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {networkService} = require('../../services');

const getNetworks = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const getNetworksResult = await networkService.getNetworks(data);
    res.json(getNetworksResult)
});

const addNetwork = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const addNetworkResult = await networkService.addNetwork(data);
    res.json(addNetworkResult)
});

const deleteNetwork = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const deleteNetworkResult = await networkService.deleteNetwork(data);
    res.json(deleteNetworkResult)
});

module.exports = {
    getNetworks,
    addNetwork,
    deleteNetwork
};

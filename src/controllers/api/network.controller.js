const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const {networkService} = require('../../services');

const getNetworks = catchAsync(async (req, res) => {
    const data = {...req.query, ...req.body, ...req.params}
    const getNetworksResult = await networkService.getNetworks(data);
    res.json(getNetworksResult)
});


module.exports = {
    getNetworks
};

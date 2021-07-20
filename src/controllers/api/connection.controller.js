const catchAsync = require('../../utils/catchAsync');
const {connectionService} = require('../../services');

const getConnectionByAddress = catchAsync(async (req, res) => {
    const connectedUser = await connectionService.getConnectionByAddress(req.query.address);
    res.json(connectedUser)
});

module.exports = {
    getConnectionByAddress,
};
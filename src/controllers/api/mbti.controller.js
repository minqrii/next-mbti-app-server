const catchAsync = require('../../utils/catchAsync');
const {mbtiService} = require("../../services");

const getMbtiResult = catchAsync(async (req, res) => {
    const result = await mbtiService.getMbtiResult()
    res.send(result)
})

module.exports = {
    getMbtiResult
}

const catchAsync = require("../../utils/catchAsync");
const { mbtiService } = require("../../services");

const getMbtiResult = catchAsync(async (req, res) => {
  const result = await mbtiService.getMbtiResult();
  res.setHeader("Access-Control-Allow-origin", "http://kulikelion-mbti.site");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send({ data: result });
});

module.exports = {
  getMbtiResult,
};

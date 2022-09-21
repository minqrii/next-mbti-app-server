const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Mbti, Page, Question } = require("../models");
const { EorI, NorS, PorJ, TorF } = require("../constant/constant");

const sendAnswer = async function (data) {
  try {
    const { id, category, ENFP, isFirst } = data;

    await saveAnswerForRate(id, category, isFirst); // questionRate에서 변경
    // 답변을 저장 -- 해당 문항의 1번 응답 비율을 계산하는 데 사용
    await saveAnswerForMbti(category, ENFP); // calculateMbti에서 변경
    // 해당 답변의 카테고리 및 응답 성향 -- 최종 MBTI 알파벳 결과 조회에 사용

    const firstAnswerRate = await calcFirstAnswerRate(id); // 추가

    const pageIdxStatus = await getPageIdx();

    if (pageIdxStatus.success)
      return {
        success: true,
        data: {
          id: id,
          pageIdx: pageIdxStatus.data.pageIdx,
          first: firstAnswerRate,
        },
      };

    throw new Error();
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data,
    };
  }
};
//request에서 id category ENFP 외에도 isFirst
const saveAnswerForRate = async (id, category, isFirst) => {
  const questionDoc = await Question.findOne({
    where: {
      id: id,
    },
    raw: true, // 왜쓰는거죠
  });

  if (questionDoc) {
    return await Question.update(
      {
        first: isFirst ? questionDoc.first + 1 : questionDoc.first,
        second: isFirst ? questionDoc.second : questionDoc.second + 1,
        total_submit: questionDoc.total_submit + 1,
      },
      {
        where: { id: id },
      }
    );
  } else {
    const data = {
      id: id,
      category: category,
      total_submit: 1,
      first: isFirst ? 1 : 0,
      second: isFirst ? 0 : 1,
    };
    console.log(data);
    return await Question.create(data);
  }
};

const saveAnswerForMbti = async (category, isPos) => {
  const mbtiDoc = await Mbti.findOne({
    where: {
      category: category,
    },
    raw: true,
  });
  if (mbtiDoc) {
    return await Mbti.update(
      { result: mbtiDoc.result + (isPos ? 1 : -1) },
      {
        where: { category: category },
      }
    );
  } else {
    const data = { category: category, result: isPos ? 1 : -1 };
    return await Mbti.create(data);
  }
};

const changePageIdx = async function (data) {
  try {
    const pageIdx = data.pageIdx.toString();
    if (pageIdx) {
      const pageData = await Page.findAll();

      if (pageData.length > 0) {
        savedIdx = pageData[0];

        await savedIdx.update({
          index: pageIdx,
        });

        return {
          success: true,
          data: { pageIdx },
        };
      }

      await Page.create({ index: pageIdx });

      return {
        success: true,
        data: { pageIdx },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: { pageIdx },
      error: error.message,
    };
  }
};

const getPageIdx = async function () {
  try {
    const pageRows = await Page.findAll();
    if (pageRows.length > 0) {
      const pageRow = pageRows[0];
      const savedIdx = pageRow.index;

      return {
        success: true,
        data: { pageIdx: savedIdx },
      };
    }

    await Page.create({ index: "0" });

    return {
      success: true,
      data: { pageIdx: "0" },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
    };
  }
};

const getMbtiResult = async function () {
  const mbtiData = await Mbti.findAll({
    raw: true,
  });
  const result = {
    EorI: "",
    NorS: "",
    TorF: "",
    PorJ: "",
  };
  mbtiData.map((e) => {
    switch (e.category) {
      case EorI:
        result.EorI = e.result >= 0 ? "E" : "I";
        break;
      case NorS:
        result.NorS = e.result >= 0 ? "N" : "S";
        break;
      case TorF:
        result.TorF = e.result >= 0 ? "F" : "T";
        break;
      case PorJ:
        result.PorJ = e.result >= 0 ? "P" : "J";
        break;
    }
  });
  return result.EorI + result.NorS + result.TorF + result.PorJ;
};

const calcFirstAnswerRate = async function (id) {
  try {
    const result = await Question.findOne({
      where: {
        id: id,
      },
      raw: true,
    });
    return ((Number(result.first) / Number(result.total_submit)) * 100).toFixed(
      2
    );
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
module.exports = {
  sendAnswer,
  changePageIdx,
  getPageIdx,
  getMbtiResult,
};

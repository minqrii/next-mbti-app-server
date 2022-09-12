const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {Mbti} = require('../models')
const {EorI, NorS, PorJ, TorF} =require('../constant/constant')


const sendAnswer = async function (data) {
   //sendAnswer
   //db update
   // -> return은 socket emit 해줄 꼴에 맞춰서 정리ㅇㅇ
   return data;
};

const changePageIdx = async function (data) {
   return data;
};

const getMbtiResult = async function () {
   const mbtiData = await Mbti.findAll({
      raw: true
   })
   const result = {
      EorI : "",
      NorS : "",
      TorF : "",
      PorJ : ""
   }
   mbtiData.map((e)=>{
      switch (e.category) {
         case EorI :
            result.EorI = ((e.result >= 0) ? "E" : "I")
            break
         case NorS :
            result.NorS = ((e.result >= 0) ? "N" : "S")
            break
         case TorF :
            result.TorF = ((e.result >= 0) ? "T" : "F")
            break
         case PorJ :
            result.PorJ = ((e.result >= 0) ? "P" : "J")
            break
      }
   })
   return (result.EorI + result.NorS + result.TorF + result.PorJ)
}

module.exports = {
   sendAnswer,
   changePageIdx,
   getMbtiResult
};

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
   return mbtiData.reduce((result, e)=>{
      switch (e.category) {
         case EorI :
            return (e.result >= 0) ? "E" : "I"
         case NorS :
            return (e.result >= 0) ? "N" : "S"
         case TorF :
            return (e.result >= 0) ? "T" : "F"
         case PorJ :
            return (e.result >= 0) ? "P" : "J"
      }
   }, "")
}

module.exports = {
   sendAnswer,
   changePageIdx,
   getMbtiResult
};

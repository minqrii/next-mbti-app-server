const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {Mbti, Page} = require('../models')
const {EorI, NorS, PorJ, TorF} =require('../constant/constant')


const sendAnswer = async function (data) {
   const {id, category, ENFP} = data
   await calculateMbti(category, ENFP)
   return data;
};

const calculateMbti = async (category, isPos) => {
   const mbtiDoc = await Mbti.findOne({
      where: {
         category : category
      },
      raw: true
   })
   if (mbtiDoc) {
      return await Mbti.update({result : (mbtiDoc.result + ((isPos) ? 1 : -1))}, {
         where: {category:category}
      })
   }
   else {
      const data = {category : category, result : ((isPos) ? 1 : -1)}
      return await Mbti.insert(data)
   }
}

const changePageIdx = async function (data) {
   try {
      const pageIdx = data.pageIdx;
      if (pageIdx) {
         const savedIdx = await Page.findOne({where:{pk:1}});

         savedIdx.set({
            index:pageIdx
         })
         await savedIdx.save();

         return {
            success : true,
            data : {pageIdx}
         }
      }
   } catch (error) {
      return {
         success : false,
         data : {pageIdx},
         error: error.message,
      }
   }

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
            result.TorF = ((e.result >= 0) ? "F" : "T")
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

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {Mbti, Page, Question} = require('../models')
const {EorI, NorS, PorJ, TorF} =require('../constant/constant')


const sendAnswer = async function (data) {
   try {
      const {id, category, ENFP, isFirst} = data;
      const qRate= await questionRate(id,category,isFirst);
      const calcMBTI=await calculateMbti(category, ENFP);
      return {
         success : true,
         questionRate : {qRate},
         calculateMbti:{calcMBTI}
      }
   } catch (error) {
      console.log(error);
      return {
         success:false,
         data,
      }
   }

};
//request에서 id category ENFP 외에도 isFirst 
const questionRate = async(id,category,isFirst)=>{
   const questionDoc = await Question.findOne({
      where:{
         id :id 
      },
      raw:true // 왜쓰는거죠
   })
 

   if(questionDoc){
      return await Question.update({first:((isFirst)?questionDoc.first+1:questionDoc.first),second:((isFirst)?questionDoc.second:questionDoc.second+1),total_submit:questionDoc.total_submit+1},{
         where :{id:id}
      })
   }
   else{
      const data ={id:id,category:category,total_submit:1,first:((isFirst)?1:0),second:((isFirst)?0:1)}
      console.log(data)
      return await Question.insert(data)
   }

}

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
         const pageData = await Page.findAll();

         if (pageData.length > 0) {
            savedIdx = pageData[0];

            await savedIdx.update({
               index:pageIdx
            })

            return {
               success : true,
               data : {pageIdx}
            }
         }

         await Page.create({index:pageIdx});

         return {
            success : true,
            data : {pageIdx}
         }
      }
   } catch (error) {
      console.log(error);
      return {
         success : false,
         data : {pageIdx},
         error: error.message,
      }
   }

};

const getPageIdx = async function () {
   try {
      const pageRow = (await Page.findAll())[0];
      const savedIdx = pageRow.index;
      
      return {
         success:true,
         data:{pageIdx:savedIdx}
      }
   } catch (error) {
      console.log(error);
      return {
         success:false,
         data:null
      }
   }
}

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
   getPageIdx,
   getMbtiResult
};

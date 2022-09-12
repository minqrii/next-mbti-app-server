const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Page } = require("../models");

const sendAnswer = async function (data) {
   return data;
};

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
         data : {pageIdx}
      }
   }
};

module.exports = {
   sendAnswer,
   changePageIdx
};

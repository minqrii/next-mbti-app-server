const makeQueryFromArray = (param, array) => {
   let query = '';

   for(let i = 0; i < array.length; i++){
      query += `&${param}[]=` + array[i];
   }

   return query.slice(1);
}

const makeQuery = (data) => {
   let queryString = ``;
   Object.keys(data).forEach((el) => {
      queryString += `${el}=${data[el]}&`
   })
   return queryString.slice(0, -1);
}


module.exports = {
   makeQueryFromArray,
   makeQuery
}

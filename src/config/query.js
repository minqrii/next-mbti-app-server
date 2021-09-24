const makeQueryFromArray = (param, array) => {
   let query = '';

   for(let i = 0; i < array.length; i++){
      query += `&${param}[]=` + array[i];
   }

   return query.slice(1);
}

module.exports = {
   makeQueryFromArray
}

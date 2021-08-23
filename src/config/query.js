const makeQuery = async(contractAddresses) => {
   let query = '';

   for(let i = 0; i < contractAddresses.length; i++){
      query += `&contractAddresses[${i}]=` + contractAddresses[i];
   }

   return query;
}

module.exports = {
   makeQuery
}
const password = (value, helpers) =>{
    if(value.length < 8){
        return helpers.message('Password must be at least 8 characters.');
    }
    if(!value.match(/\d/) || !value.match(/[a-zA-Z]/)){
        return helpers.message('Password must contain at least 1 letter and 1 number');
    }
    return value
};

const address = (value, helpers) =>{
    if(value.length !== 48)
        return helpers.message('Wrong address');
    if(value.slice(0,4)!== "0x1k")
        return helpers.message('Wrong address form')
    return value
};

module.exports = {
    password,
    address
}


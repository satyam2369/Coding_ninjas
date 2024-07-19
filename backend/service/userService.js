const jwt = require('jsonwebtoken');
const key = 'hello';


function createToken(data){
    return jwt.sign(data,key,{expiresIn:'1h'});
}

function getDataFromToken(token){
    // return {userId: 123, username: 'user'};
    return jwt.verify(token,key);
}

module.exports = { createToken, getDataFromToken };
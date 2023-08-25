var jwt = require('jsonwebtoken');


const checktoken = (req,res,next) =>
{
    jwt.verify(req.headers.authorization,"kinjal65",next)
}

module.exports = {
    checktoken
};
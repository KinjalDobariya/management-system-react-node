var loginModel = require('../Model/Loginmodel')
var jwt = require('jsonwebtoken');


exports.Login = async (req, res) => {

    try {
        var data = await loginModel.find({ "email": req.body.email });

        if (data.length > 0) {

            if (data[0].password == req.body.password) {

                var token = jwt.sign({id:data[0].id},"kinjal65")

                res.status(200).json({
                    status: "Login Success",
                    token
                })

            } else {
                res.status(400).json({
                    status: "Check your Password",
                })
            }

        } else {
            res.status(400).json({
                status: "Check your Email",
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "Something Warong...!",
        })
    }

}

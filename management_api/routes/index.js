var express = require('express');
var router = express.Router();
const cors = require('cors');
const { Login } = require('../Controller/Logincontroller');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));
/* GET home page. */
router.post('/',Login)

module.exports = router;

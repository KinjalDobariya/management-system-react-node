var express = require('express');
const multer = require('multer');
const { addmissionData, studentDetails, studentUpdate, allAdmission, delete_admission, search_admission, topicUpdate, topicDetails } = require('../Controller/Addmissionconroller');
var router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/addmissionData', upload.single('image'), addmissionData);
router.get('/alladmission', allAdmission);
router.get('/student-detail/:id', studentDetails);
router.put('/student-update/:id',  upload.single('image'),studentUpdate);
router.delete('/delete-admission/:id', delete_admission);
router.get('/search_admission', search_admission);

router.put('/topic-update', topicUpdate);





module.exports = router;
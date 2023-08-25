var express = require('express');
const { addCourse, veiw_course, delete_course, update_course, single_course, view_content, search_course } = require('../Controller/Coursecontroller');
const { addContent, allContent_course, update_content, single_content, search_content, delete_content } = require('../Controller/Contentcontroller');
var router = express.Router();

/* GET home page. */
router.post('/addcourse', addCourse);
router.get('/veiw_course', veiw_course);
router.delete('/deletecourse/:id', delete_course);
router.put('/updatecourse/:id', update_course);
router.get('/singlecourse/:id', single_course);
router.get('/searchcourse',search_course);

// router.get('/single_course/:id',single_course);



router.post('/add_content', addContent);
router.get('/allcontent_course', allContent_course);
router.get('/viewcontent', view_content);
router.put('/updatecontent/:id', update_content);
router.delete('/deletecontent/:id', delete_content);
router.get('/singlecontent/:id', single_content);
router.get('/searchcourse',search_content);




module.exports = router;

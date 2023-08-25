var courseModel = require('../Model/Coursemodel')
var contentModel = require('../Model/Contentmodel');

exports.addCourse = async (req, res) => {
    try {

        var data = await courseModel.create(req.body);

        res.status(200).json({
            status: "data add successfully",
            data
        })

    } catch (error) {
        res.status(404).json({
            status: 'error',
            error: error.message
        })
    }
}

exports.veiw_course = async (req, res) => {

    try {
        var limit = 5;
        var page_no = req.query.page_no
        var skip = (page_no - 1) * limit;
        var total = await courseModel.find().countDocuments();
        var lastpage = Math.ceil(total/limit);
        var data = await courseModel.find().skip(skip).limit(limit);

        res.status(200).json({
            status: "data add successfully",
            data,
            skip,
            limit,
            page_no,
            lastpage
        })

    } catch (error) {
        res.status(404).json({
            status: 'error',
            error: error.message
        })
    }
}

exports.update_course = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        const data = await courseModel.findByIdAndUpdate(id, updateData,{new:true})
        res.status(200).json({
            status: "update",
            data,

        })
    }

    catch (error) {
        res.status(400).json({
            status: "Error",
            error: error.message,

        })
    }
}

exports.delete_course = async (req, res) => {

    try {
        var id = req.params.id
        var data = await courseModel.findByIdAndDelete(id);

        res.status(200).json({
            status: "Delete Data sucessfully",
        })

    } catch (error) {
        res.status(404).json({
            status: 'error',
            error: error.message
        })
    }
}

exports.single_course = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await courseModel.findById(id)
        res.status(200).json({
            status: "update ",
            data,

        })
    }

    catch (error) {
        res.status(400).json({
            status: "Error",
            error: error.message,

        })
    }
}

exports.view_content = async (req, res) => {

    try {
        var limit = 5;
        var page_no = req.query.page_no
        var skip = (page_no - 1) * limit;
        var total = await courseModel.find({content_id:{$exists: true ,$ne:null}}).countDocuments();
        var data = await courseModel.find({content_id:{$exists: true ,$ne:null}}).skip(skip).limit(limit).populate('content_id');
        var data1 = await courseModel.find({content_id:{$exists: true ,$ne:null}}).populate('content_id');

        var lastpage = Math.ceil(total/limit);

        res.status(200).json({
            status: "data add successfully",
            data,
            data1,
            lastpage,skip
        })

    } catch (error) {
        res.status(404).json({
            status: 'error',
            error: error.message
        })
    }
}

exports.search_course = async (req, res) => {
    try{
        var q = req.query.course;
        const regex = new RegExp(q, "i");
        const data = await courseModel.find({ "coursename": { $regex: regex },content_id:{$exists: true ,$ne:null} })
        console.log(data);
        res.status(200).json({
          status: "body Post Find Successfully",
          data,
        });
      
    }
   
        catch(error){
            res.status(400).json({
                status:error,
                error:error.message
            })
        }
   
}
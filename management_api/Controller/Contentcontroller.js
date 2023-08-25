var contentModel = require('../Model/Contentmodel');
const courseModel = require('../Model/Coursemodel');

exports.addContent = async (req, res) => {

    try {

        const course_id = req.body.course_id;
        const findData = await courseModel.findById(course_id)

        if (findData.content_id) {

            var exist_content_id = findData.content_id
            const data = await contentModel.findById(exist_content_id);

            if (data) {

                var content_data = data.content.split(',')
                var new_content_data = req.body.content.split(',')
                var new_content = new_content_data.filter(content => !content_data.includes(content));
                var update_content = content_data.concat(new_content);
                var update_content_string = update_content.join(",");


                if (req.body.duration || req.body.joining_date || req.body.ending_date || req.body.daily_time) {
                    var obj = {
                        content: update_content_string,
                        duration: req.body.duration,
                        joining_date: req.body.joining_date,
                        ending_date: req.body.ending_date,
                        daily_time: req.body.daily_time,

                    }

                } else {
                    var obj = {
                        content: update_content_string
                    }
                }

                const updatedData = await contentModel.findByIdAndUpdate(data._id, obj, { new: true });

                res.status(200).json({
                    status: 'data updated successfully',
                    data: updatedData,
                });

            }
        }
        else {

            var data = await contentModel.create(req.body);

            const obj = {
                content_id: data._id
            }

            await courseModel.findByIdAndUpdate(course_id, obj, { new: true });

            res.status(200).json({
                status: "data add successfully",
                data
            })
        }





    } catch (error) {
        res.status(404).json({
            status: 'error',
            error: error.message
        })
    }
}

exports.allContent_course = async (req, res) => {

    try {
        var data = await courseModel.find()

        console.log(data);

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

exports.single_content = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await contentModel.findById(id)
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

exports.update_content = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await contentModel.findByIdAndUpdate(id, req.body, { new: true })
        console.log(data);

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

exports.delete_content = async (req, res) => {

    try {
        var id = req.params.id
        var data = await contentModel.findByIdAndDelete(id);

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

exports.search_content = async (req, res) => {
    try {
        var q = req.query.course;
        const regex = new RegExp(q, "i");
        const data = await courseModel.find({ "coursename": { $regex: regex } })
        console.log(data);
        res.status(200).json({
            status: "body Post Find Successfully",
            data,

        });

    }

    catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}
const addmissionModel = require('../Model/Addmissionmodel');


exports.addmissionData = async (req, res) => {


    try {

        var file = req.file.originalname
        const admissionData = {
            image: file,
            surname: req.body.surname,
            studentname: req.body.studentname,
            fathername: req.body.fathername,
            stu_contact_no: req.body.stu_contact_no,
            stu_whatsapp_no: req.body.stu_whatsapp_no,
            parent_contact_no: req.body.parent_contact_no,
            parent_whatsapp_no: req.body.parent_whatsapp_no,
            address: req.body.address,
            dob: req.body.dob,
            qualification: req.body.qualification,
            reference: req.body.reference,
            referencename: req.body.referencename,
            course: req.body.course,
            course_content: req.body.course_content,
            course_duration: req.body.course_duration,
            total_fees: req.body.total_fees,
            joining_date: req.body.joining_date,
            ending_date: req.body.ending_date,
            daily_time: req.body.daily_time,
            job_responsbility: req.body.job_responsbility,
            college_course: req.body.college_course,
            batch_time: req.body.batch_time,
            runnng_topic: req.body.runnng_topic,
            faculty: req.body.faculty,
            pc_laptop: req.body.pc_laptop,
            pc_no: req.body.pc_no,
            laptop_compulsory: req.body.laptop_compulsory,
            gst: req.body.gst,
            extra_note: req.body.extra_note,
            reception_note: req.body.reception_note,
            installment_details: req.body.installment_details,
            complete_topic: req.body.complete_topic,
            student_status: req.body.student_status
        }

        var data = await addmissionModel.create(admissionData);
        console.log(data);

        res.status(200).json({
            status: "Data add successfully",
            data,
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }
}

exports.allAdmission = async (req, res) => {


    try {
        var data = await addmissionModel.find();

        res.status(200).json({
            status: "Data add successfully",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }
}

exports.studentDetails = async (req, res) => {


    try {

        var id = req.params.id
        var data = await addmissionModel.findById(id);

        res.status(200).json({
            status: "Data add successfully",
            data
        })

    } catch (error) {
        res.status(200).json({
            status: error,
            error: error.message
        })
    }
}

exports.studentUpdate = async (req, res) => {
    try {



        var id = req.params.id;
        var file = req.file.originalname
        const updateData = {
            image: file,
            surname: req.body.surname,
            studentname: req.body.studentname,
            fathername: req.body.fathername,
            stu_contact_no: req.body.stu_contact_no,
            stu_whatsapp_no: req.body.stu_whatsapp_no,
            parent_contact_no: req.body.parent_contact_no,
            parent_whatsapp_no: req.body.parent_whatsapp_no,
            address: req.body.address,
            dob: req.body.dob,
            qualification: req.body.qualification,
            reference: req.body.reference,
            referencename: req.body.referencename,
            course: req.body.course,
            course_content: req.body.course_content,
            course_duration: req.body.course_duration,
            total_fees: req.body.total_fees,
            joining_date: req.body.joining_date,
            ending_date: req.body.ending_date,
            daily_time: req.body.daily_time,
            job_responsbility: req.body.job_responsbility,
            college_course: req.body.college_course,
            batch_time: req.body.batch_time,
            runnng_topic: req.body.runnng_topic,
            faculty: req.body.faculty,
            pc_laptop: req.body.pc_laptop,
            pc_no: req.body.pc_no,
            laptop_compulsory: req.body.laptop_compulsory,
            gst: req.body.gst,
            extra_note: req.body.extra_note,
            reception_note: req.body.reception_note,
            installment_details: req.body.installment_details,
            complete_topic: req.body.complete_topic,
            student_status: req.body.student_status
        }
        const updatedDocument = await addmissionModel.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json({
            status: "update",
            data: updatedDocument
        })

    } catch (error) {
        res.status(200).json({
            status: error,
            error: error.message
        })
    }
}

exports.delete_admission = async (req, res) => {

    try {
        var id = req.params.id
        var data = await addmissionModel.findByIdAndDelete(id);

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

exports.search_admission = async (req, res) => {
    try {
        var q = req.query.admission;
        const regex = new RegExp(q, "i");
        // const data = await addmissionModel.find({ "studentname": { $regex: regex } })
        const data = await addmissionModel.find({
            $or: [
                { "surname": { $regex: regex } },
                { "studentname": { $regex: regex } },
                { "fathername": { $regex: regex } }
            ]
        });

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

exports.topicUpdate = async (req, res) => {
    try {

        var id = req.body.id;
        const updateData = req.body;
        const updatedDocument = await addmissionModel.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json({
            status: "update",
            data: updatedDocument
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }
}

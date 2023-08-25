const mongoose = require('mongoose');
var validator = require('validator');


const addmissionSchema = new mongoose.Schema({

    surname: { type: String },
    studentname: { type: String },
    fathername: { type: String },

    stu_contact_no: { type: String },
    stu_whatsapp_no: { type: String },
    parent_contact_no: { type: String },
    parent_whatsapp_no: { type: String },
    address: { type: String },
    dob: { type: String },
    image: { type: String },
    qualification: { type: String },
    reference: { type: String },
    referencename: { type: String },

    // ------ course data --
    course: { type: String },
    course_content: { type: String },
    course_duration: { type: String },
    total_fees: { type: String },
    joining_date: { type: String },
    ending_date: { type: String },
    daily_time: { type: String },
    job_responsbility: { type: String },
    college_course: { type: String },
    batch_time: { type: String },
    runnng_topic: { type: String },
    faculty: { type: String },

    // --- default data--
    pc_laptop: { type: String, default: 'PC' },
    pc_no: { type: String, default: '0' },
    laptop_compulsory: { type: String, default: 'No' },
    gst: { type: String, default: 'yes' },

    extra_note: { type: String },
    reception_note: { type: String },

    // --- fees data --
    installment_details: [
        {
            amount: { type: String },
            installment_date: { type: String },
            status: { type: String, }

        },
    ],
    complete_topic: { type: String },
    student_status: { type: String },

})


const addmissionModel = mongoose.model('addmission', addmissionSchema);

module.exports = addmissionModel;
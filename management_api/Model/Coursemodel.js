const mongoose = require('mongoose');
var validator = require('validator');


const courseSchema = new mongoose.Schema({

    coursename: {
        type: String,
        required: [true, "course name require"],
        unique: true,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error("Enter Course name");
            }
        }
    },
    
    total_fees: {
        type: String,
        required: [true, "Fess require"],
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error(" Enter your Fess");
            }
        }
    },
    
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "content"
    }

});


const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;





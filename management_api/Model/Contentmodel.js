const mongoose = require('mongoose');
var validator = require('validator');


const contentSchema = new mongoose.Schema({

    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    content: { type: String },
    duration: { type: String },
    joining_date: { type: String },
    ending_date: { type: String },
    daily_time: { type: String },

})


const contentModel = mongoose.model('content', contentSchema);

module.exports = contentModel;
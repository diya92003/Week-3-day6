const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    CourseName:{
        type: String,
        required: true,
    },
    Code:{
        type: String,
        required: true,
    },
    Credit:{
        type: Number,
        required: true,
    },
    Hours:{
        type: Number,
        required: true,
    },
}, {timestamps: true}
);
module.exports = new mongoose.model("Course", courseSchema);

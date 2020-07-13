const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample',(err)=>{
    if (err) {
            console.log(err);
        }
    else {
            console.log("connected to database");
        }
});

const surveySchema = mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:{type:String , required: true} ,
    email:{type:String , required: true},
    gradyear:{type:Number, required: true},
    question_1: {type:Number, required: true},
    question_2: {type:Number, required: true},
    question_3: {type:Number, required: true},
    question_4: {type:Number, required: true},
    question_5: {type:Number, required: true}
    
});

module.exports = mongoose.model("surveys",surveySchema);

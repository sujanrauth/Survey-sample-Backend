const express = require('express');
const router = express.Router();

const surveyModel = require('../models/surveydb');
const { Mongoose } = require('mongoose');

// router.get('/',(req, res, next)=>{
//     res.status(200).json({
//         message:'Handling GET Requests'
//     });
// });

router.post('/',(req, res, next)=>{
    var flag=0;
    surveyModel.find({name: req.body.name,email: req.body.email},(err,data)=>{
        if(err){
            console.log(err);
        }
        else
        {
            if(data.length>=1)
            {
                flag=1;
                res.status(200).json({
                    message:"Survey already Taken"
                });   
            }
            else
            {
                const survey = new  surveyModel({name: req.body.name, email: req.body.email,
                    gradyear :req.body.gradyear,question_1:req.body.question_1,question_2:req.body.question_2,question_3:req.body.question_3,
                    question_4:req.body.question_4,question_5:req.body.question_5});
                    survey.save().then((result=>{
                        console.log(result);
                        res.status(200).json({ createdsurvey : result})
                    })).catch(err=>{
                        console.log(err);
                        res.status(500).json({
                            message:err
                        })
                    });
            }

        }
    });

});

module.exports = router;
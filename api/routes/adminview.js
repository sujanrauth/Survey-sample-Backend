const express = require('express');
const router = express.Router();

const surveyModel = require('../models/surveydb');
const avgcal = require('../../avgcal');

router.get('/',(req, res, next)=>{
    surveyModel.find({gradyear:req.body.year}).
    select("question_1 question_2 question_3 question_4 question_5").
    exec().
    then((result)=>{
        if(result.length>=1)
        {
            var avg = avgcal({records:result});
            res.status(200).json({
                count : result.length,
                average : avg
            })
        }
        else
        {   
            var msg = "No documents found of that year"
            console.log(msg)
            res.status(201).json({
                message:msg
            })
        }
        
    }).
    catch((err)=>{
        console.log(err);
        res.status(500).json({
            message:err
        })
    });
    // res.status(200).json({
    //     message:'Graph an be viewed',
    //     averageGraph :graph
    // });
});

module.exports = router;

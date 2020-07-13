module.exports = function (jsonData)
{
    console.log(jsonData)
    var jsonparse = JSON.parse(JSON.stringify(jsonData));
    var q1=0;
    var q2=0;
    var q3=0;
    var q4=0;
    var q5=0;
    var i=0;
    var length = jsonparse.records.length;
    for ( i=0; i<jsonparse.records.length;i++)
    {
        q1=q1+jsonparse.records[i].question_1;
        q2=q2+jsonparse.records[i].question_2;
        q3=q3+jsonparse.records[i].question_3;
        q4=q4+jsonparse.records[i].question_4;
        q5=q5+jsonparse.records[i].question_5;

        // q1+=jsonparse.result[i].question_1;
        // q2=jsonparse.result[i].question_2;
        // q3=jsonparse.result[i].question_3;
        // q4=jsonparse.result[i].question_4;
        // q5=jsonparse.result[i].question_5;
    }


    return {
        question_1:(q1/length),
        question_2:(q2/length),
        question_3:(q3/length),
        question_4:(q4/length),
        question_5:(q5/length)
    }
}


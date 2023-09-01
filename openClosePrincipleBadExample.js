function printQuiz(questions){
    questions.forEach(question => {
        console.log('Question: ' +question.des );
        switch (question.type){
            case 'boolean':
                console.log('True');
                console.log('False');
              break;
            case 'MCQs':
                console.log('DHA Phase 5');
                console.log('DHA Phase 6');
                console.log('DHA Phase 7');
                console.log('DHA Phase 8');
        }
    });
    console.log('not');
}
//
let questions = [
    {
        type:'boolean',
        des:'The article is useful.'
    },
    {
        type:'MCQs',
        des:'Which of the following is right address of Cloud-1.'
    },
]

printQuiz(questions);
document.write("hi")
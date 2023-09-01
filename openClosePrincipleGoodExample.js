class BooleanQuestions{
    constructor(des){
        this.description = des
    }
    printOptions(){
        console.log('True');
        console.log('False');
    }
}
class MultupleChoiceQuestions{
    constructor(des){
        this.description = des
    }
    printOptions(){
        console.log('DHA Phase 5');
        console.log('DHA Phase 6');
        console.log('DHA Phase 7');
        console.log('DHA Phase 8');
    }
}
let questions = [
    new BooleanQuestions('The article is useful.'),
    new MultupleChoiceQuestions('Which of the following is right address of Cloud-1', 
    ['DHA Phase 5', 'DHA Phase 6', 'DHA Phase 7', 'DHA Phase 8']
    )
 
 ]
function printQuiz(questions){
    questions.forEach(question => {
        console.log('Question: ' +question.description );
        question.printOptions();
       
    });
    console.log('--------------');
}
//

printQuiz(questions)
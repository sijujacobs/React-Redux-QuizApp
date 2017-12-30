import React, { Component } from 'react';
import ResultComponent from './ResultComponent';

export default class AnswerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            answeredQuestions : []
        }
    }

    hasAnswerSelected(questionId, answerId){
        var answeredQuestions = this.state.answeredQuestions;
        var hasSelected = false;
        for(var i = 0; i < answeredQuestions.length; i++){
            var thisAnsQuestion = answeredQuestions[i];
            if( (thisAnsQuestion.questionId === questionId) && (thisAnsQuestion.answerId === answerId) ){
                hasSelected = true;
                break;
            }
        }
        return hasSelected;
    }

    updateQuestionsAnswered(selectedAnswer){
        var tempAnswers = this.state.answeredQuestions;
        var currentQuestionID = this.props.question.questionId;
        let currentQuestionAnswer = {
            questionId : currentQuestionID,
            answerId : selectedAnswer.id,
            points  : selectedAnswer.points
        }

        var found = false;
        for(let i=0; i < tempAnswers.length; i++){
            var thisAQ = tempAnswers[i];
            if(thisAQ.questionId === currentQuestionID){
                tempAnswers[i] = currentQuestionAnswer;
                found = true;
                break;
            }
        }
        if(!found){
            tempAnswers.push(currentQuestionAnswer)
        }
        this.setState({
            answeredQuestions : tempAnswers
        })
        this.props.updateComponent(this.state.answeredQuestions)
        this.refs.resultComp.setTotalPoints(this.state.answeredQuestions);
    }

    render() {
        
        let elements = [];
        if(this.props.question.answers){
            elements = this.props.question.answers.map((item, index) => {
                var thisAnserSelected = this.hasAnswerSelected(this.props.question.questionId, item.id);
                let thisItemClass = thisAnserSelected ? "selectedAnswer" : "optionButton";
                return (
                    <div className={thisItemClass} key={index} onClick={() => {this.updateQuestionsAnswered(item)} }> {item.answer}</div>
                )
            })
        }
        return (
                <div className="answerContainer">
                    <div>{elements}</div>
                    <ResultComponent ref="resultComp"  className="resultComponent" 
                    totalQuestions={this.props.totalQuestions} answeredQuestions={this.state.answeredQuestions} />
                </div>
                );
    }
}




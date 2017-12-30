import React, { Component } from 'react';
import AnswerComponent from './AnswerComponent';
import { connect } from 'react-redux';
import * as quizAction from '../actions/quizAction';

class QuizComponent extends Component {
    constructor(){
        super();
        this.state = {
            currentQuestion     : {},
            selectedAnswer      : {},
            answeredQuestions   : [],
            totalQuestions      : 0,
        }
    }

    componentDidMount(){
        this.props.getQuestion(1);
    }

    updateComponent(answeredQuestions){
        this.setState({
            answeredQuestions
        })
    }

    preButtonClick(){
        const totalQuestions = this.props.totalQuestions;
        const currentQuestion = this.props.currentQuestion;
        const prevQuestionId = (currentQuestion.questionId > 1) ?  (currentQuestion.questionId - 1) : currentQuestion.questionId;

        if(prevQuestionId > 0 && prevQuestionId <= totalQuestions){
            this.props.getQuestion(prevQuestionId);
        } 
    }

    nextButtonClick(){
        const totalQuestions = this.props.totalQuestions;
        const currentQuestion = this.props.currentQuestion;
        const nextQuestionId = (currentQuestion.questionId < totalQuestions) ?  (currentQuestion.questionId + 1) : currentQuestion.questionId;
        
        if(nextQuestionId > 0 && nextQuestionId <= totalQuestions){
            this.props.getQuestion(nextQuestionId);
        } 
    }

    render() {
        let submitVisibility = (this.props.currentQuestion.questionId  === this.props.totalQuestions) ? "hideContainer" : "showContainer";
        let prevButtonVisibility = (this.props.currentQuestion.questionId === 1) ? "hideContainer" : "showContainer";
        
        return (
            <div>
                <div className="navButtonBlock">
                    <button className={"navButton floatLeft " + prevButtonVisibility} onClick={this.preButtonClick.bind(this)}> Previous </button>
                    <button className={"navButton floatRight " + submitVisibility} onClick={this.nextButtonClick.bind(this)}> Next </button>
                </div>
                <div className="questionContainer">
                    <label className="questionTitle">{this.props.currentQuestion.questionId}. {this.props.currentQuestion.title}</label>
                </div>
                <AnswerComponent question={this.props.currentQuestion} 
                                totalQuestions={this.props.totalQuestions} 
                                updateComponent={this.updateComponent.bind(this)}/> 
            </div>
        );
    }
}

    const mapStateToProps = (state, ownProps) => {
        return {
            currentQuestion : state.currentQuestion,
            totalQuestions : state.totalQuestions
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            getQuestion: (questionId) =>dispatch(quizAction.getQuestion(questionId))
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);


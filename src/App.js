import React, { Component } from 'react';
import './App.css';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import {data} from '../src/data/questions';

import { connect } from 'react-redux';
import * as quizAction from './actions/quizAction';


class App extends Component {

  componentDidMount(){
    let currentQuestion = data.questionData.filter(question => question.questionId === 1);
    let firstQuestion = currentQuestion[0];
    this.props.getNextQuestion(firstQuestion);
  }

  getCurrentQuestion(questionId){
    const currentQuestion = data.questionData.filter(question => question.questionId === questionId);
    return currentQuestion[0];
  }

  preButtonClick(e){
    const questionCount = data.questionData.length;
    
    const thisQuestion = this.props.question;
    const thisQuestionId = (thisQuestion.questionId > 1) ?  (thisQuestion.questionId - 1) : thisQuestion.questionId;

    if(thisQuestion.questionId > 0 && thisQuestion.questionId <= questionCount){
      this.props.getNextQuestion(this.getCurrentQuestion(thisQuestionId));
    } 
  }

  nextButtonClick(e){
      const questionCount = data.questionData.length;
    
      const thisQuestion = this.props.question;
      const thisQuestionId = (thisQuestion.questionId < questionCount) ?  (thisQuestion.questionId + 1) : thisQuestion.questionId;
      if(thisQuestion.questionId > 0 && thisQuestion.questionId < questionCount){
        this.props.getNextQuestion(this.getCurrentQuestion(thisQuestionId));
      } 
  }

  submitButtonClick(){
        var sAnswers = this.props.selectedAnswers;
        var totalPoints = 0;
        for(var i = 0; i < sAnswers.length; i++){
          var thisAns = sAnswers[i];
          totalPoints += thisAns.answerPoint;
        } 
        return totalPoints;
  }

  render() {
    let currentQuestion = this.props.question || {};
    return (
      <div className="App">
        <header className="appHeader">
          <h4>ReactJS - Redux</h4>
        </header>
        <div className="navBlock">
          <button className="navButton floatLeft" onClick={this.preButtonClick.bind(this)}> Previous </button>
          <button className="navButton floatRight" onClick={this.nextButtonClick.bind(this)}> Next </button>
        </div>
        <QuizComponent className="questionComponent" currentQuestion={currentQuestion}/>
        <ResultComponent className="resultComponent" selectedAnswers={this.props.selectedAnswers} submitButtonClick={this.submitButtonClick} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question : state.question,
    selectedAnswers : state.selectedAnswers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNextQuestion: (question) =>dispatch(quizAction.getNextQuestion(question))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

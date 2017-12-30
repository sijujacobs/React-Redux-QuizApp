import React, { Component } from 'react';
import './App.css';
import QuizComponent from './components/QuizComponent';

export default class App extends Component {


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
          <h4>Quiz App on ReactJS - Redux</h4>
        </header>
        <QuizComponent className="questionComponent" currentQuestion={currentQuestion}/>
      </div>
    );
  }
}



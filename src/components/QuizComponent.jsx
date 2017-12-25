import React, { Component } from 'react';
import AnswerComponent from './AnswerComponent';

export default class QuizComponent extends Component {

    render() {
      var thisQuestion = this.props.currentQuestion || {};
      return (
        <div>
          <header className="questionContainer">
            <label>{thisQuestion.questionId}. {thisQuestion.title}</label>
          </header>
          <AnswerComponent question={this.props.currentQuestion}/> 
        </div>
      );
    }
}


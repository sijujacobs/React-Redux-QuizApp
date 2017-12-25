import React, { Component } from 'react';
import {data} from '../data/questions';

export default class ResultComponent extends Component {
  getTotalPoints(){
    //const questionCount = data.questionData.length;
    
      var sAnswers = this.props.selectedAnswers;
      var totalPoints = 0;
      for(var i = 0; i < sAnswers.length; i++){
        var thisAns = sAnswers[i];
        totalPoints += thisAns.answerPoint;
      } 
      let pointPercentage = (totalPoints/(data.questionData.length * 10)) * 100;
      return pointPercentage;
}
    render() {
      let totalPoints = this.getTotalPoints();
      let setVisibilityClass = (this.props.selectedAnswers.length === data.questionData.length) ? "showContainer" : "hideContainer";
      return (
        <div className={setVisibilityClass}>
            <p>You scored : {totalPoints} % </p>
            <button className="showSubmit" onClick={this.props.submitButtonClick}>Submit</button>
        </div>
      );
    }
}



import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as quizAction from '../actions/quizAction';


class AnswerComponent extends Component {

  optionButtonClick(answer){
    let answerObj = {
      answerId : answer.id, 
      answerPoint : answer.points,
      questionId : this.props.question.questionId
    }
    this.props.addPoints(answerObj);
  }

  hasAnswerSelected(questionId, answerId){
    var sAnswers = this.props.selectedAnswers;
    var hasSelected = false;
    for(var i = 0; i < sAnswers.length; i++){
      var thisAns = sAnswers[i];
      if( (thisAns.answerId === answerId) && (thisAns.questionId === questionId) ){
        hasSelected = true;
        break;
      }
    }
    return hasSelected;
  }

  render() {
    var elements = [];
    if(this.props.question.answers){
      elements = this.props.question.answers.map((item, index) => {
        var thisAnserSelected = this.hasAnswerSelected(this.props.question.questionId, item.id);
        let thisItemClass = thisAnserSelected ? "selectedAnswer" : "optionButton";
        return (
            <div className={thisItemClass} ref={item.id} data-answerid={item.id} key={index} onClick={this.optionButtonClick.bind(this, item)}> {item.answer}</div>
        )
    })
    }
    return (
          <div className="answerContainer" onClick={this.props.childCompClick}>
              
              <div className="optionContainer">
                {elements}
              </div>
          </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    totalPoints : state.totalPoints,
    selectedAnswerId : state.selectedAnswerId,
    selectedAnswers : state.selectedAnswers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPoints: (answerObj) => dispatch(quizAction.addPoints(answerObj))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerComponent);

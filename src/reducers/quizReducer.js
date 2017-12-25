import * as actionTypes from '../actions/actionTypes';
import {data} from '../data/questions';

export default (state = [], action) => {

      switch (action.type){
        case actionTypes.NEXT_QUESTION:
          //console.log("quizReducer:: state --> : ", state);
          //console.log("quizReducer:: action --> : ", action);
          return Object.assign( {}, state, { question : action.question } )
          // return [
          //   ...state,
          //   Object.assign({}, action.question)
          // ];
        case actionTypes.ADD_POINTS:
          let selectedAnswerId = 0;
          let thisQuestion;
          let selectedAnswer;
          var thisAnswerPoint = 0;
              const getThisAnswerPoints = (answerObj) => {
                let filteredQuestions = data.questionData.filter(question => question.questionId === answerObj.questionId);
                thisQuestion = filteredQuestions[0];
                if(thisQuestion.answers){
                  let filteredAnswers = thisQuestion.answers.filter(answer => answer.id === answerObj.answerId);
                  selectedAnswer = filteredAnswers[0];
                  thisAnswerPoint = selectedAnswer.points;
                  selectedAnswerId = selectedAnswer.id;
                }
                return thisAnswerPoint;
              }

              thisAnswerPoint = getThisAnswerPoints(action.answer);
              let uniqueSelectedAnswers = state.selectedAnswers;
                let found = false;
                for(let i=0; i < state.selectedAnswers.length; i++){
                  let thisAns = state.selectedAnswers[i];
                  if(thisAns.questionId === action.answer.questionId){
                      found = true;
                      uniqueSelectedAnswers[i] = action.answer;
                      break;
                  }
                }
                if(!found){
                  uniqueSelectedAnswers.push(action.answer)
                }
              
              console.log("StateSeletedAnseres :: uniqueSelectedAnswers : ",uniqueSelectedAnswers);
              return Object.assign( {}, state, { 
                                              totalPoints : 0, 
                                              selectedAnswerId : selectedAnswerId,
                                              selectedAnswers : uniqueSelectedAnswers
                                           } )
        
        case actionTypes.SUBMIT_ANSWERS:
          return Object.assign( {}, state, { "sumbitAnswers" : "Answers Submitted" } )
        default:
          return state;
      }
  };
  


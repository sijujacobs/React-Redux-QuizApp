import * as actionTypes from './actionTypes';

export const getNextQuestion = (question) => {
  //console.log("quizAction:: getNextQuestion : question ", question);
  return {
    type: actionTypes.NEXT_QUESTION,
    question
  }
};

export const addPoints = (answer) => {
  console.log("QuizAction:: addPoints : ", answer);

  return {
    type: actionTypes.ADD_POINTS,
    answer
  }
};



export const submitAnswers = () => {
  console.log("quizAction:: childCompFunction");
  return {
    type: actionTypes.SUBMIT_ANSWERS
  }
};

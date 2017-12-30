import * as actionTypes from './actionTypes';
import {data} from '../data/questions';

export const getQuestion = (questionId) => {
  //console.log("quizAction:: getNextQuestion : questionId ", questionId);
  return {
    type: actionTypes.NEXT_QUESTION,
    question : getCurrentQuestion(questionId),
    totalQuestions : getTotalQuestion()
  }
};

export const submitAnswers = () => {
  console.log("quizAction:: childCompFunction");
  return {
    type: actionTypes.SUBMIT_ANSWERS
  }
};
// ---------------------API--
const getCurrentQuestion = (questionId) => {
  return data.questionData.filter(question => question.questionId === questionId)[0];
}

const getTotalQuestion = () => {
  return data.questionData.length;
}






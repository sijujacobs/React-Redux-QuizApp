import { combineReducers } from 'redux';
import points from './quizReducer';

export default combineReducers({
    points: points
});

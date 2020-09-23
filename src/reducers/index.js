import { combineReducers } from 'redux';
import guessedWordReducer from './guessedWordReducer';
import successReducer from './successReducer';
import guessedWords from './guessedWordReducer';


export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducer,
});
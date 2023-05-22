import {combineReducers} from 'redux';
import commentDataReducer from './commentDataReducer';
//insert another reducers here to be combined

const reducers = combineReducers({
  commentDataReducer,
});

export default reducers;

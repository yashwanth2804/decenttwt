import {combineReducers} from 'redux';
import Tweet from './Tweet';
 

const rootReducer = combineReducers({
    tweetR:Tweet,
     
});

export default rootReducer;


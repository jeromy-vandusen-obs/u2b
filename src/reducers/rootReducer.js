import { combineReducers } from 'redux';
import videoPlayback from './videoPlayback';
import comments from './comments';

export default combineReducers({
    videoPlayback,
    comments
});

import initialState from '../state/initialState';
import { addComment, getComments } from '../services/CommentService';

export default (state = initialState.comments, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            addComment(action.videoId, action.comment);
            return {...state, comments: getComments(action.videoId)};
        default:
            return state;
    }
};

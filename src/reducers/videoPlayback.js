import initialState from '../state/initialState';
import { getVideo } from '../services/VideoService';

export default (state = initialState.videoPlayback, action) => {
    switch (action.type) {
        case 'SELECT_VIDEO':
            return {...state, isVideoPlaying: false, currentVideo: getVideo(action.id)};
        case 'PLAY_VIDEO':
            return {...state, isVideoPlaying: true};
        case 'PAUSE_VIDEO':
            return {...state, isVideoPlaying: false};
        default:
            return state;
    }
};

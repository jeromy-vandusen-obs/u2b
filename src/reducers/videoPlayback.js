import initialState from '../state/initialState';
import { getVideo } from '../services/VideoService';

export default (state = initialState.videoPlayback, action) => {
    switch (action.type) {
        case 'SELECT_VIDEO':
            const currentVideo = getVideo(action.id);
            return {...state, currentVideo: currentVideo};
        case 'PLAY_VIDEO':
            return {...state, isVideoPlaying: true};
        case 'PAUSE_VIDEO':
            return {...state, isVideoPlaying: false};
        default:
            return state;
    }
};

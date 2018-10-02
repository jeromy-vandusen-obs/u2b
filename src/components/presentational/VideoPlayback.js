import React from 'react';
import { connect } from 'react-redux';

import { pauseVideo } from '../../actions/pauseVideo';
import { playVideo } from '../../actions/playVideo';

const mapStateToProps = state => ({
    title: state.videoPlayback.currentVideo.title,
    url: state.videoPlayback.currentVideo.url,
    isVideoPlaying: state.videoPlayback.isVideoPlaying
});

const mapDispatchToProps = dispatch => ({
    playButtonClicked: () => dispatch(playVideo()),
    pauseButtonClicked: () => dispatch(pauseVideo())
});

const VideoPlayback = ({title, url, isVideoPlaying, playButtonClicked, pauseButtonClicked}) => (
    <div>
        <div className="row mt-2">
            <h3>{title}</h3>
        </div>
        <div className="row mt-2">
            <img src={url}
                alt={title}
                width="70%"
                height="70%" />
        </div>
        <div className="row mt-2">
            {
                isVideoPlaying ? (
                    <button type="button" onClick={pauseButtonClicked}>
                        <i className="fa fa-pause-circle"></i>
                    </button>
                ) : (
                    <button type="button" onClick={playButtonClicked}>
                        <i className="fa fa-play-circle"></i>
                    </button>
                )
            }
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayback);

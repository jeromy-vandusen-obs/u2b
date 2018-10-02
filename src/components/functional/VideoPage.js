import React from 'react';
import { connect } from 'react-redux';

import './VideoPage.css';

import { getRecommendedVideos } from '../../services/VideoService';

import RecommendedVideo from '../presentational/RecommendedVideo';
import VideoPlayback from '../presentational/VideoPlayback';
import { selectVideo } from '../../actions/selectVideo';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (id) => dispatch(selectVideo(id))
});

const VideoPage = ({selectVideo}) => (
    <div className="row col-12">
        <div className="col-xl-10 col-lg-9 col-md-7 col-sm-12">
            <VideoPlayback />

            <div className="row mt-2">
                <h4>Comments</h4>
            </div>
        </div>

        <div className="col-xl-2 col-lg-3 col-md-5 col-sm-12">
            {
                getRecommendedVideos().map(recommendedVideo =>
                    <RecommendedVideo key={recommendedVideo.id} title={recommendedVideo.title} url={recommendedVideo.url} onClick={() => selectVideo(recommendedVideo.id)} />
                )
            }
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);

import React from 'react';
import { connect } from 'react-redux';

import './VideoPage.css';

import { getRecommendedVideos } from '../../services/VideoService';
import { getComments } from '../../services/CommentService';

import RecommendedVideo from '../presentational/RecommendedVideo';
import VideoPlayback from '../presentational/VideoPlayback';
import Comments from '../presentational/Comments';
import { selectVideo } from '../../actions/selectVideo';
import { addComment } from '../../actions/addComment';

const mapStateToProps = state => ({
    videoId: state.videoPlayback.currentVideo.id,
    comments: getComments(state.videoPlayback.currentVideo.id)
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (id) => dispatch(selectVideo(id)),
    addComment: (videoId, username, content) => dispatch(addComment(videoId, {username: username, content: content}))
});

const VideoPage = ({videoId, comments, selectVideo, addComment}) => (
    <div className="row col-12">
        <div className="col-xl-10 col-lg-9 col-md-7 col-sm-12">
            <VideoPlayback />

            <Comments videoId={videoId} comments={comments} addComment={addComment} />
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

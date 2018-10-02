const videoComments = [];

this.nextCommentId = 0;

export const addComment = (videoId, comment) => {
    const filteredVideoComments = videoComments.filter(entry => entry.videoId === videoId);
    if (filteredVideoComments.length === 0) {
        const videoCommentsEntry = { videoId: videoId, comments: [{...comment, id: this.nextCommentId ++}] };
        videoComments.push(videoCommentsEntry);
        return;
    }
    filteredVideoComments[0].comments.push({...comment, id: this.nextCommentId ++});
};

export const getComments = (videoId) => {
    const filteredVideoComments = videoComments.filter(entry => entry.videoId === videoId);
    if (filteredVideoComments.length === 0) {
        return [];
    }
    return filteredVideoComments[0].comments;
};

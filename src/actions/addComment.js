export const addComment = (videoId, comment) => ({
    type: 'ADD_COMMENT',
    videoId: videoId,
    comment: comment
});

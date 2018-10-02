export const selectVideo = (id) => dispatch => {
    dispatch({
        type: 'SELECT_VIDEO',
        id: id
    })
};

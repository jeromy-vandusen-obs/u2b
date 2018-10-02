import React from 'react';

import Comment from './Comment';

export default ({videoId, comments, addComment}) => (
    <div>
        <div className="row mt-2">
            <h4>Comments</h4>
        </div>

        {
            comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))
        }

        <div className="row mt-2">
            <form onSubmit={event => {
                event.preventDefault();
                addComment(videoId, this.username.value, this.content.value);
                this.username.value = '';
                this.content.value = '';
            }}>
                <div className="form-group">
                    <input type="text" className="form-control" ref={node => {this.username = node}} placeholder="your name" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" ref={node => {this.content = node}} placeholder="your comment" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
);

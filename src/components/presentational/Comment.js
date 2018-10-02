import React from 'react';

export default ({comment}) => (
    <div className="row mt-2">
        <div className="col">
            <div className="row">
                <p>{comment.content}</p>
            </div>
            <div className="row">
                <p className="text-muted">Posted by: {comment.username}</p>
            </div>
        </div>
    </div>
);

import React from 'react';

export default ({title, url}) => (
    <div className="row mt-2">
        <img src={url}
            alt={title}
            width="100%"
            height="100%" />
        <b>{title}</b>
    </div>
);

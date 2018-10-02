import React from 'react';

export default ({title, url, onClick}) => (
    <div className="row mt-2">
        <img src={url}
            alt={title}
            width="100%"
            height="100%"
            onClick={onClick} />
        <b>{title}</b>
    </div>
);

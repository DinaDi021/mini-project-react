import React from 'react';

const Post = ({post}) => {
    const {title, body} = post
    return (
        <div>
            <h2>{title}</h2>
            <h2>{body}</h2>
        </div>
    );
};

export {Post};
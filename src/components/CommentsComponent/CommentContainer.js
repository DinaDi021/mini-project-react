import React from 'react';

const CommentContainer = ({comment}) => {
    const { postId, id, name,  email, body } = comment;

    return (
        <div>
            <h3>{postId}</h3>
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <p>{body}</p>
        </div>
    );
};

export {CommentContainer};
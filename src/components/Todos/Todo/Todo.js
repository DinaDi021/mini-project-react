import React from 'react';

const Todo = ({todo}) => {
    const {title, completed} = todo;

    return (
        <div>
            <h2>title: {title}</h2>
            <h4>completed {completed ? 'true' : 'false'}</h4>
        </div>
    );
};

export {Todo};
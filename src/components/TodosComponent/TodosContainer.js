import React from 'react';

const TodosContainer = ({todo}) => {
    const {userId, id, title, completed } = todo;

    return (
        <div>
            <h3>{userId}</h3>
            <h3>{id}</h3>
            <h2>{title}</h2>
            <h2>{completed}</h2>
        </div>
    );
};
export {TodosContainer};
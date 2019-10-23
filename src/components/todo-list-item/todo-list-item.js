/* Core */
import React from 'react';
/* Style */
import './todo-list-item.scss';

const TodoListItem = ( { label, important = false } ) => {
    const elStyle = {
        color: important ? 'tomato': 'black'
    };

    return <span className="todo-list-item todo-list__label" style={elStyle}>{ label }</span>;
};

export default TodoListItem;
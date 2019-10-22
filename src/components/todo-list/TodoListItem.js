/* Core */
import React from 'react';
/* Style */
import './TodoListItem.scss';

const TodoListItem = ( { label, important = false } ) => {
    const elStyle = {
        color: important ? 'tomato': 'black'
    };

    return <span className="TodoListItem todo-list__label" style={elStyle}>{ label }</span>;
};

export default TodoListItem;
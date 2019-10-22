/* Core */
import React from 'react';
/* Style */
import './TodoListItem.scss';

const TodoListItem = ( { label, important = false } ) => {
    const elStyle = {
        color: important ? 'tomato': 'black'
    };

    return <span className="TodoListItem" style={elStyle}>{ label }</span>;
};

export default TodoListItem;
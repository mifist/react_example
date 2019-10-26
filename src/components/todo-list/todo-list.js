/* Core */
import React from 'react';
/* Component */
import TodoListItem from '../todo-list-item';
/* Style */
import './todo-list.scss';

const TodoList = ( { todos, onDeleted,
    onToggleImportant,
    onToggleDone 
} ) => {

    const elements = todos.map( (item, index) => {
        const isActive = false;
        const { id, ...itemProps } = item;
        const itemClass = isActive ? 'list-group-item active' : 'list-group-item';
        return (
        
            <li key={ id } className={ itemClass } >
                {/* <TodoListItem label={ item.label } important={ item.important } /> */}
                {/* or */}
                <TodoListItem 
                    { ...itemProps } 
                    onDeleted={ () => onDeleted(id) }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list"> { elements } </ul>
    );
};

export default TodoList;

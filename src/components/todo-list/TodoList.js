/* Core */
import React from 'react';
/* Component */
import TodoListItem from './TodoListItem';
/* Style */
import './TodoList.scss';

const TodoList = ( { todos } ) => {

    const elements = todos.map( (item, index) => {
        const isActive = false;
        const { id, ...itemProps } = item;
        const itemClass = isActive ? 'list-group-item active' : 'list-group-item';
        return (
        
            <li className={itemClass} key={ index }>
                {/* <TodoListItem label={ item.label } important={ item.important } /> */}
                {/* or */}
                <TodoListItem { ... itemProps } />
                <div className="todo-list__actions">
                    <button type="button" className="btn btn-outline-danger"><i className="fa fa-trash"></i></button>
                    <button type="button" className="btn btn-outline-success"><i className="fa fa-check"></i></button>
                </div>
            </li>
        );
    });

    return (
        <ul className="list-group TodoList todo-list"> { elements } </ul>
    );
};

export default TodoList;

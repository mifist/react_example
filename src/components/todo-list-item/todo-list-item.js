/* Core */
import React from 'react';
/* Style */
import './todo-list-item.scss';

const TodoListItem = ({ label, done, important,
    onDeleted,
    onToggleImportant,
    onToggleDone  
}) => {

    /* Classes */
    let elClasses = 'todo-list-item';
    let btnClassImportant = 'btn btn-outline-info';
    let btnClassDelet = 'btn btn-outline-danger';
    let btnClassDone = 'btn btn-outline-success';

    if (done) { 
        elClasses += ' done';
        btnClassDone += ' active';
    }
    if (important) { 
        elClasses += ' important';
        btnClassImportant += ' active';
    }
    return (
        <div className={elClasses}>
            <span 
                className="todo-list-item__label"
                onClick={ onToggleDone } >
                { label }
            </span>
            <div className="todo-list-item__actions">
                <button type="button"
                    className={btnClassDelet}
                    onClick={ onDeleted }>
                    <i className="fa fa-trash"></i>
                </button>
                <button type="button" 
                    className={btnClassImportant}
                    onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" 
                    className={btnClassDone}
                    onClick={ onToggleDone }>
                    <i className="fa fa-check"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;
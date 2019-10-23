/* Core */
import React, { Component } from 'react';
/* Style */
import './todo-list-item.scss';

export default class TodoListItem extends Component {
    /*  constructor() {
        super();
        this.state = { done: false};
        this.onItemClick = () => {
            console.log(`Done: ${this.props.label}`);
        };
    } */
    /* or */
    state = { 
        done: false,
        important: false
    };
    onLabelClick = () => { // function event listener
        console.log(`Done: ${this.props.label}`);
        this.setState( (state) => { // принимает функцию -> аргумент - текущий state
            return {
                done: !state.done
            }
        });
    };

    onMarkImportant = () => {
        this.setState( ({important}) => {
            return {
                important: !important
            }
        });
    };
    
    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let elClasses = 'todo-list-item';
        let btnClassImportant = 'btn btn-outline-info';
        let btnClassDelet = 'btn btn-outline-danger';
        let btnClassDone = 'btn btn-outline-success';

        if (done) { 
            elClasses += ' done'
            btnClassDone += ' active'
        }
        if (important) { 
            elClasses += ' important'
            btnClassImportant += ' active' 
        }
        

        return (
            <div className={elClasses}>
                <span 
                    className="todo-list-item__label"
                    onClick={ this.onLabelClick } >
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
                        onClick={ this.onMarkImportant }>
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button type="button" 
                        className={btnClassDone}
                        onClick={ this.onLabelClick }>
                        <i className="fa fa-check"></i>
                    </button>
                </div>
            </div>
        );
    }
};

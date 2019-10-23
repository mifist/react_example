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
        const { label } = this.props;
        const { done, important } = this.state;

        let elClasses = 'todo-list-item';
        let btnClassDanger = 'btn btn-outline-danger';
        let btnClassSuccess = 'btn btn-outline-success';

        if (done) { 
            elClasses += ' done'
            btnClassSuccess += ' active'
        }
        if (important) { 
            elClasses += ' important'
            btnClassDanger += ' active' 
        }
        

        return (
            <div  className={elClasses}>
                <span 
                    className="todo-list-item__label"
                    onClick={ this.onLabelClick } >
                    { label }
                </span>
                <div className="todo-list-item__actions">
                    <button type="button" 
                        className={btnClassDanger}
                        onClick={ this.onMarkImportant }>
                        <i className="fa fa-paw"></i>
                    </button>
                    <button type="button" 
                        className={btnClassSuccess}
                        onClick={ this.onLabelClick }>
                        <i className="fa fa-check"></i>
                    </button>
                </div>
            </div>
        );
    }
};

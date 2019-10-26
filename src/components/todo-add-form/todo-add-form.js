/* Core */
import React, { Component } from 'react';
/* Style */
import './todo-add-form.scss';

export default class TodoAddForm extends Component {
   // state = {  }
    maxListId = 100;
    render() {
        
        const { onAdd } = this.props;
        
        return (
            <div className="input-group todo-add-form">
                <input type="text" className="form-control" 
                    placeholder="Recipient's username" />
                <div className="input-group-append">
                    <button type="button" id="button-addon2"
                        className="btn btn-outline-success"  
                        onClick={ () => onAdd(`New List Item ${this.maxListId++}`) } >
                        Add Item
                    </button>
                </div>
            </div>
        );
    }
}
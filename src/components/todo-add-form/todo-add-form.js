/* Core */
import React, { Component } from 'react';
/* Style */
import './todo-add-form.scss';

export default class TodoAddForm extends Component {

    state = { 
        label: ''
    };

    onLabelChange = (event) => this.setState({ label: event.target.value });

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addListItem( this.state.label )
        this.setState({ label: '' })
    }

    render() {
        return (
            <form className="input-group todo-add-form"
                    onSubmit={ this.onSubmit }>
                <input type="text" className="form-control"
                        value={ this.state.label }
                        placeholder="What needs to be done....." 
                        onChange={ this.onLabelChange } />
                <div className="input-group-append">
                    <button type="submit" id="button-addon2" 
                            className="btn btn-outline-success">
                        Add Item
                    </button>
                </div>
            </form>
        );
    }
}
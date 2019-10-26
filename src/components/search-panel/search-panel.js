/* Core */
import React, { Component } from 'react';
/* Style */
import './search-panel.scss';

export default class SearchPanel extends Component {
    state = { 
        term: '' 
    }
    
    onSearchChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onSearchChange( event.target.value );
    }

    render() {
        return (
            <div className="search-panel">
                <div className="input-group">
                    <input className="form-control" 
                        placeholder="Type here to start search....."
                        value={ this.state.term }
                        onChange={ this.onSearchChange } /> 
                </div>
            </div>
        );
    }
}

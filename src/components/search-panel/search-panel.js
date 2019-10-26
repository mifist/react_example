/* Core */
import React, { Component } from 'react';
/* Style */
import './search-panel.scss';

export default class SearchPanel extends Component {
    state = { label: '' }

    render() {
        return (
            <div className="search-panel">
                <div className="input-group">
                    <input className="form-control" 
                        placeholder="Type here to start search....."
                        value={ this.state.label }
                        onChange={ (event) => {
                                this.setState({ label: event.target.value });
                                this.props.onFilterind(this.state.label); 
                            }} /> 
                </div>
            </div>
        );
    }
}

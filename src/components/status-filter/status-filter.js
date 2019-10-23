/* Core */
import React, { Component } from 'react';
/* Style */
import './status-filter.scss';

export default class StatusFilter extends Component {
    render() {
        return (
            <div className="btn-group status-filter" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">All</button>
                <button type="button" className="btn btn-secondary">Active</button>
                <button type="button" className="btn btn-secondary">Done</button>
            </div>
        );
    }
}

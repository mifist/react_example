/* Core */
import React, { Component } from 'react';
/* Style */
import './status-filter.scss';

export default class StatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];

    render() {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons.map(({ name, label })=> {
            const isActive = filter === name
            const btnClass = isActive ? `btn-info ${name}` : `btn-secondary ${name}`
            return (
                <button key={name} type="button" 
                className={ `btn ${btnClass}` } 
                onClick={() => onFilterChange(name) } >{ label }</button>
            )
        })

        return (
            <div className="btn-group status-filter" role="group" aria-label="Basic example">
                { buttons }
            </div>
        );
    }
}

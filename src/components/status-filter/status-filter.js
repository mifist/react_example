/* Core */
import React from 'react';
/* Style */
import './status-filter.scss';

const StatusFilter = () => {
    return (
        <div className="btn-group status-filter" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">All</button>
            <button type="button" className="btn btn-secondary">Active</button>
            <button type="button" className="btn btn-secondary">Done</button>
        </div>
    );
}

export default StatusFilter;
/* Core */
import React from 'react';
/* Style */
import './FilterPanel.scss';

const FilterPanel = () => {
    return (
        <div className="btn-group FilterPanel" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">All</button>
            <button type="button" className="btn btn-secondary">Active</button>
            <button type="button" className="btn btn-secondary">Done</button>
        </div>
    );
}

export default FilterPanel;
/* Core */
import React from 'react';
/* Style */
import './search-panel.scss';

const SearchPanel = () => {
    const searchText = 'Type here to start search.....';
    return (
        <div className="search-panel">
            <div className="input-group">
                <input className="form-control" placeholder={searchText} /> 
            </div>
        </div>
    );
};

export default SearchPanel;

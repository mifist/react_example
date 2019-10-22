/* Core */
import React from 'react';
/* Style */
import './SearchPanel.scss';

const SearchPanel = () => {
    const searchText = 'Type here to start search.....';
    return (
        <div className="SearchPanel">
            <div className="input-group">
                <input className="form-control" placeholder={searchText} /> 
            </div>
        </div>
    );
};

export default SearchPanel;

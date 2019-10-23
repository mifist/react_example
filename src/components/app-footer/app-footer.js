/* Core */
import React from 'react';
/* Style */
import './app-footer.scss';

const AppFooter = ( { copyright } ) => {
    console.log(copyright);
    return (
        <footer className="app-footer">
            <p className="copyright">{ copyright }</p>
        </footer>
    );
}

export default AppFooter;
/* Core */
import React from 'react';
/* Style */
import './AppFooter.scss';

const AppFooter = ( { copyright } ) => {
    console.log(copyright);
    return (
        <footer className="AppFooter">
            <p className="copyright">{ copyright }</p>
        </footer>
    );
}

export default AppFooter;
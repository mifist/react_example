/* Core */
import React from 'react';
/* Style */
import './AppHeader.scss';

const AppHeader = () => {
    const isLoggedIn = true;
    const loginMsg = <span>Login in this App please.</span>; /* React element */
    const welcomeMsg = <span>Welcome Back to this App.</span>;
    return (
        <header className="AppHeader">
            { isLoggedIn ? welcomeMsg : loginMsg }
            <br />
            <span>Current Time: { (new Date()).toString() }</span>
            <div className="app-header">
                <h1>TODO List App</h1>
                <h2>1 more to do, 3 done</h2>
            </div>
            
        </header>
    );
};

export default AppHeader;
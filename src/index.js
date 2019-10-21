import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['List 1', 'List 2', 'List 3'];
    return (
        <ul>
        <li>{ items[0] }</li>
        <li>{ items[1] }</li>
        <li>{ items[2] }</li>
    </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>TODO List</h1>
    );
};

const SearchPanel = () => {
    return (
        <input placeholder="Search..." />
    );
};

const App = () => {
    const isLoggedIn = true;
    const loginMsg = <span>Login in this App please.</span>; /* React element */
    const welcomeMsg = <span>Welcome Back to this App.</span>;
    return (
        <div>
            { isLoggedIn ? welcomeMsg : loginMsg }<br />
            <span>{ (new Date()).toString() }</span>
            <AppHeader /> {/* name of React component */}
            <SearchPanel />   
            <TodoList />
        </div> 
    );
};


ReactDOM.render(<App />,
    document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
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

const el = (
    <div>
        <AppHeader /> 
        <SearchPanel />   
        <TodoList />
    </div>
);

ReactDOM.render(el,
    document.getElementById('root'));



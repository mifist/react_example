/* Core */
import React from 'react';
import ReactDOM from 'react-dom';
/* Component */
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

import SearchPanel from './components/search-panel';
import StatusFilter from './components/status-filter';

import TodoList from './components/todo-list';

/* Style */
import './app.scss';

const App = () => {
    const copyright = 'This is footer copyright';
    const todoData = [
        { label: 'Drink coffe', important: false, id: 1 },
        { label: 'Drink water', important: false, id: 2 },
        { label: 'Learn React', important: true, id: 3 },
        { label: 'Learn ES6', important: true, id: 4 },
        { label: 'Have a lanch', important: false, id: 5 },
    ];

    return (
        <div className="main-app">
            <AppHeader /> {/* name of React component */}
            <div className="app-actions-panel">
                <SearchPanel />   
                <StatusFilter />
            </div>
            <TodoList todos={todoData} />
            <AppFooter copyright={copyright} />
        </div> 
    );
};

export default App;
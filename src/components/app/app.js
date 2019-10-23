/* Core */
import React from 'react';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';

import TodoList from '../todo-list';

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
            <AppHeader toDo="1" done="3" /> {/* name of React component */}
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
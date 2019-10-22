/* Core */
import React from 'react';
import ReactDOM from 'react-dom';
/* Component */
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import SearchPanel from './components/search-panel/SearchPanel';
import FilterPanel from './components/filtering/FilterPanel';

import TodoList from './components/todo-list/TodoList';

/* Style */
import './App.scss';

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
        <div className="MainApp">
            <AppHeader /> {/* name of React component */}
            <div className="app-actions-panel">
                <SearchPanel />   
                <FilterPanel />
            </div>
            <TodoList todos={todoData} />
            <AppFooter copyright={copyright} />
        </div> 
    );
};


ReactDOM.render(<App />,
    document.getElementById('root'));



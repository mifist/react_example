/* Core */
import React, { Component } from 'react';
/* Component */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoAddForm from '../todo-add-form';



/* Style */
import './app.scss';

export default class App extends Component {

    maxListId = 100;
    state = { 
        todoData: [
            { label: 'Drink coffe', important: false, id: 1 },
            { label: 'Drink water', important: false, id: 2 },
            { label: 'Learn React', important: false, id: 3 },
            { label: 'Learn ES6', important: false, id: 4 },
            { label: 'Have a lanch', important: false, id: 5 },
        ]
    }

    /* Нельзя изменять предыдущее значение state, 
    поскольку он очень часто изменяется асинхронно и могут возникнуть ошибки */
    deletListItem = (id) => {
        console.log('del', id);
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id )
        /*  const before = todoData.slice(0, idx)
            const after = todoData.slice(idx+1)
            const newTodoData = [...before, ...after ]; */
            const newTodoData = [ ...todoData.slice(0, idx), ...todoData.slice(idx+1) ];
            return {
                todoData: newTodoData
            }
        });
    }

    addListItem = (text) => {
        console.log('add', text);
        // generate id ?
        const newListItem = { label: text, important: false, id: this.maxListId++ }
        // add element in array ?
        this.setState(({ todoData }) => {
            const newTodoData = [ ...todoData, newListItem ];
            return {
                todoData: newTodoData
            }
        });
    }

    render() {
        const copyright = 'This is footer copyright';
        const { todoData } = this.state; // arr
        return (
            <div className="main-app">
                <AppHeader toDo="1" done="3" /> {/* name of React component */}
                <div className="app-actions-panel">
                    <SearchPanel />   
                    <StatusFilter />
                </div>
                <TodoList 
                    todos={ todoData } 
                    onDeleted={ this.deletListItem }
                />
                <TodoAddForm 
                    onAdd={ this.addListItem } 
                />
                <AppFooter copyright={copyright} />
            </div> 
        );
    }
}
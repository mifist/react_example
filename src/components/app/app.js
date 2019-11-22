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

    maxListId = 100
    state = { 
        todoData: [
            this.createTodoItem('Drink coffe'),
            this.createTodoItem('Drink water'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Learn ES6'),
            this.createTodoItem('Have a lanch'),
        ],
        term: '',
        filter: 'active'// active, done, all
    }

    /* Helper Functions */
    createTodoItem(label) {
        return {
            label, 
            important: false, 
            done: false,
            id: this.maxListId++ 
        }
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id )

        // 1. update object
        const oldItem = arr[idx]
        const newItem = { ...oldItem, 
            [propName]: !oldItem[propName] 
        }

        // 2. construct new todoData
        return [ 
            ...arr.slice(0, idx), 
            newItem,
            ...arr.slice(idx+1) 
        ];
    }

    /* Actions */
    deletListItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id )
            const newTodoData = [ 
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx+1) 
            ]
            return {
                todoData: newTodoData
            }
        });
    }

    addListItem = (text) => {
        if ( text !== '' ) {
            console.log('add', text);
            // generate id ?
            const newListItem = this.createTodoItem( text )
            // add element in array ?
            this.setState(({ todoData }) => {
                const newTodoData = [ ...todoData, newListItem ]
                return {
                    todoData: newTodoData
                }
            });
        } else {
            alert('Enter new task, what needs to be done!');
        }
        
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }
    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    onToggleImportant = (id) => this.setState(({ todoData }) => {
        return {
            todoData: this.toggleProperty( todoData, id, 'important' )
        }
    })

    onToggleDone = (id) => this.setState(({ todoData }) => {
        return {
            todoData: this.toggleProperty( todoData, id, 'done' )
        }
    })

    search(items, term) {
        if (term.length === 0) {
            return items
        } 
        return items.filter( (el) => {
            return el.label.toLowerCase().includes(term.toLowerCase())
        } )
    }

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }

    render() {
        const { todoData, term, filter } = this.state; // arr
        const visibleData = this.filter( this.search(todoData, term), filter)
        const doneCount = todoData
        .filter((el) => el.done )
        .length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="main-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="app-actions-panel">
                    <SearchPanel onSearchChange={ this.onSearchChange } />   
                    <StatusFilter 
                    filter={ filter } 
                    onFilterChange={ this.onFilterChange } />
                </div>
                <TodoList todos={ visibleData } 
                    onDeleted={ this.deletListItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <TodoAddForm addListItem={ this.addListItem } />
                <AppFooter copyright="This is footer copyright" />
            </div> 
        );
    }
}
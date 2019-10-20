import React from 'react';
import ReactDOM from 'react-dom';

const title = (
    <div>
        <h1>TODO List</h1>
        <input placeholder="Search..." />
        <ul>
            <li>list 1</li>
            <li>list 2</li>
        </ul>
    </div>
);

ReactDOM.render(title,
    document.getElementById('root'));



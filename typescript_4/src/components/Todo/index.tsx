import React from 'react'
import TodoItem from './TodoItems';
import './style.css'

const Todo: React.FC = () => {
    return (
        <div className='todolists'>
            <ol>
                <TodoItem/>
                <TodoItem/>
            </ol>

            <ol>
                <TodoItem/>
            </ol>   
        </div>

    )
};

export default Todo;
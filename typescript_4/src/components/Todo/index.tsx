import React from 'react'
import TodoItem from './TodoItems';
import './style.css'
interface userProps{
    name : string;
    active : boolean;
}

interface User{
    items : Array<userProps>
}


//props -- coming by parent
// React.FC<user> -- function outputting to parent
const Todo: React.FC<User> = ({items}) => {
    return (
        <div className='todolists'>
            <ol>
                {/* introducing key so that react can track them */}
                {items.map((item) => (
                    <TodoItem key={item.name} name={item.name} active={item.active} />
                ))}
            </ol> 
        </div>

    )
};

export default Todo;
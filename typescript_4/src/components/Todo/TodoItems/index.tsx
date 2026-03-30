import React from 'react';
import './style.css';
interface userInfo{
    name : string;
    active : boolean;
}
const TodoItem : React.FC<userInfo> = ({name , active}) => {
    return (
        <>
        <li>{name}</li>
        <li>{active ? 'Active' : 'Inactive'}</li>
        </>
    )
};

export default TodoItem;
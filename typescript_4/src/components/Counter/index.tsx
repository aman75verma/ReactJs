import React, { useState , useEffect } from 'react';
import "./style.css";

const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [name, setName] = useState<string>("");

    useEffect(()=> {
        console.log("Mounted") //dependency -- mounting only

        return function(){
            console.log("Counter Unmounted") //dependency -- unounting

        }
    } , []) 

    useEffect(()=> {
        console.log("Name Updated")
    } , [name]) //dependency -- name update

    useEffect(()=> {
        console.log("Counter Updated")
    } , [counter]) //dependency -- counter update


    const handleIncrement = () => {
        setCounter(prev => prev + 1);
        console.log("Clicked");
    };
    const handleDecrement = () => {
        setCounter(prev => prev - 1);
        console.log("Clicked");
    };

    return (
        <div>
            <div className='counter-container'>
                <input type="text" placeholder='Name' value = {name} onChange={ (e) => setName(e.target.value)} />
                <h2>Hello {name}</h2>
                <h1>{counter}</h1>

                <button onClick={handleIncrement} style={{ background: "lightgreen" }}>
                    INC
                </button>

                <button onClick={() => {handleDecrement()}} style={{ background: "tomato" }}>
                    DEC
                </button>
            </div>
        </div>
    );
};

export default Counter;
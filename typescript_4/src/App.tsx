//user active application 

import React from "react";
import { useState } from "react";
import Todo from "./components/Todo/index";
import Counter from "./components/Counter";
const myuser = [
  {
  name : "Aman",
  active : true
  },

  {
    name : "Kapil",
    active : false
  }
]
const App: React.FC = () => {
  const [state , setState] = useState<boolean>(true)
  return (
    <div>
    <div style = {{border: '1px solid red'}} onClick={e => alert('clicked')}> 
      {/* <Todo items={  [{} , {} < {}]  }/> we can pass arrays of object */}
      {/* <Todo items={myuser}/> */}
      <Todo items = {[
        {
          name: "Aman" ,
          active : false
        } ,
        {
          name: "Anant" ,
          active : true
        }  
        ]} />
    </div>
    <button onClick={(e) => setState(!state) }>Toggle</button>
      {state ? <Counter/> : ""}

    </div>
  );
};

export default App;

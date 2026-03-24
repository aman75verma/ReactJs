//todo application

import React from "react";
import Todo from "./components/Todo/index";

const App: React.FC = () => {
  return (
    <>
      <Todo/>
      <h1>Hello from App</h1>
      <Todo/>
      <h1>Hello from App</h1>
      <Todo/>
    </>
  );
};

export default App;

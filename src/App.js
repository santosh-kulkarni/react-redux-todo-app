import React from 'react';
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './App.css';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import Login from './components/Login';

/* function Button(props) {
  return (
    <button>{props.counter}</button>
  )
} */


function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <TodoList />
      <Login/>
    </div>
  );
}

export default App;

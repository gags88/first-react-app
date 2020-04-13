import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from './todoListData';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  render(){
    const todos = this.state.todos.map(todo => <li key={todo.id} ><TodoItem item={todo} handleChange={this.handleStateChange} /></li>)
  
    return(
      <ul className="todo-list">
        {todos}
      </ul>
    )
  }

  handleStateChange(id) {
    this.setState(prevState => {
      const todos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      });
      return { todos }
    })
  }
}

export default TodoList;
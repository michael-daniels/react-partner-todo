import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import List from './List'

class App extends Component {

  state = {todos:[]};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        res.json()
        .then((data) => {
          console.log(data)
          let tempState = data.filter(todo => todo.id <= 5)
          console.log('tempState: ', tempState);
          this.setState({todos: tempState})
          console.log(this.state)
        })
      })
  }

  addTodo = (todoObj) => {


    this.setState({
      todos: this.state.todos.concat(todoObj)
    })
  }

  render() {

    return (
      <div className="container">
        <Input todos={this.state.todos} addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Input extends Component {

  state = {
    title: '',
    completed: false,
    id: this.props.todos.length+1

  }

  this.props.todos.length ? handleSubmit = (event) => {
    event.preventDefault()

    this.props.addTodo(this.state)
  } : null


  render() {
    console.log('prop length',this.props.todos.length + 1);
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={(e) => {this.setState({title:e.target.value})}}/>
        <select onChange={(e) => {this.setState({completed:e.target.value})}}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      </div>
    );
  }
}

export default Input;

import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    todos:[ ]
  }

  // lifecycle method 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState( { todos: res.data }))
  }
   
  // function to mark each todo as complete when checked;
markComplete = (id) =>{
  this.setState( { todos: this.state.todos.map( todo => {
    if(todo.id === id){
      // if the todo is the same as the one passed through the map, then the 'completed' is equal to the opposite boolean value
      todo.completed = !todo.completed 
    }
    return todo;
  }) });
}
// delete todo item function
delItem = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then( res => this.setState( { todos:[...this.state.todos.filter(todo => todo.id !== id )] }))

}

// add todo function
addTodo = (title) =>{
  axios.post('https://jsonplaceholder.typicode.com/todos',
  {
    title:title,
    completed: false
  })

  .then( res => this.setState( {todos: [...this.state.todos, res.data]}) )
    
}


  render(){
     
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>    
      <AddTodo addTodo={this.addTodo} />
      <Todos  todos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem} />
        </React.Fragment>
      )} />
      <Route path="/about"  component={About}
       />
    </div> 
    </div>
    </Router>
  );

  }
}

export default App;


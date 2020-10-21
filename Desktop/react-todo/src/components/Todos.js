import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render(){ 
   
    return this.props.todos.map((todo) => (
         <TodoItem key={ todo.id } todo={todo} markComplete={this.props.markComplete} delItem ={this.props.delItem} />
    // the "todo" parameter is being passed as the props
        ));
    }
} 
 
// Proptypes 
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

export default Todos;
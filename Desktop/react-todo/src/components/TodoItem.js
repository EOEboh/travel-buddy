import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component{

    theStyle = () => {
      return {
          background: '#f4f4f4',
          fontWeight:800,
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none',
          backgroundColor: this.props.todo.completed ? 'green' : '#f4f4f4'
      }      
    }
     btnStyle = () =>{
         return{
        float: 'right',
        backgroundColor: 'red',
        border: 'none'
         }
    }

    render() {
        // array destructuring to avoid writing 'this.props...' all the time
        const { id, title } = this.props.todo;
        
        return (
            <div style={this.theStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {
                     title 
                    } 
                     <button onClick={this.props.delItem.bind(this, id)} style={this.btnStyle()}>&times;</button>
                     </p>

            </div>
        )
    }
} 
 

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}


export default TodoItem
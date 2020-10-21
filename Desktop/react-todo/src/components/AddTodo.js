import React, { Component } from 'react';

import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state ={
        title: 'Go to the mall today'
    }


    onSubmitFunction = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState( { title: '' });
    }
    onChangeFunction = (e) => this.setState( { [e.target.name]: e.target.value});
    render() {
        return(
            <div>
          <form onSubmit={this.onSubmitFunction} style={{ display: 'flex'}}>
              <input type="text" 
              name="title" 
              style={{ flex: '10', padding: '5px'}}
              placeholder="Add Todo"
              value={this.state.title}
              onChange={this.onChangeFunction} />
 
              <input type="submit" 
              value="Add"
              className="btn"
              style={{flex: '1'}} />
          </form>  
          </div>
        )
    }
}


// Proptypes 
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
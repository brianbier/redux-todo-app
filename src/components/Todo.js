import React from 'react';

class Todo extends React.Component{
  render(){
  	const {task} = this.props
    return(
      <li>{task.text}</li>
    )
  }
}

export default Todo;
import React from 'react';

class Todo extends React.Component{
  removeTask(e){
    e.preventDefault();
    var id = this.props.i;
    this.props.removeTodo(id);
  }
  render(){
  	const {task} = this.props
    return(
      <li>{task.text}<button onClick={this.removeTask.bind(this)}>&times;</button></li>
    )
  }
}

export default Todo;
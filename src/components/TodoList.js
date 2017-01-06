import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
  render(){
    return(
      <ul>
      {this.props.data.map((task,index)=><Todo {...this.props} key={index} task={task} />)}
      </ul>
    )
  }
}

export default TodoList;
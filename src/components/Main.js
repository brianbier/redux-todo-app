import React from 'react';
import { Link } from 'react-router';
import FormContainer from '../container/FormContainer';
import TodoList from './TodoList';

class Main extends React.Component{
  
  render(){
    return(
      <div>
      <h1><Link to="/">Todo's Today</Link></h1>
      {React.cloneElement(this.props.children,this.props)}
      <TodoList />
      </div>
    )
  }
}

export default Main;
import React from 'react';
import { Link } from 'react-router';
import TodoList from './TodoList';

class Main extends React.Component{
  componentDidMount(){
    console.log('I am about to mount');
    this.props.fetchPosts()
  }
  render(){
    return(
      <div>
      <h1><Link to="/">Todo's Today</Link></h1>
      {React.cloneElement(this.props.children,this.props)}
      <TodoList {...this.props} />
      </div>
    )
  }
}

export default Main;
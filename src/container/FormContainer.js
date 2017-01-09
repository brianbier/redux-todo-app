import React from 'react';
// import {connect} from 'react-redux';

class FormContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const todo = this.refs.text.value;
    // this.props.addTodo(todo);
    this.props.postData(todo);
    this.refs.TodoForm.reset();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} ref="TodoForm">
        <input type="text" ref="text" placeholder="Type your task"/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default FormContainer;
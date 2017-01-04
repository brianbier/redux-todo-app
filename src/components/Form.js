import React from 'react';

//Components
import FormContainer from '../container/FormContainer';

class Form extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    console.log('I am handling submit')
   
  }
  render(){
    return(
      <div>
      <FormContainer />
      </div>
    )
  }
}


export default Form;
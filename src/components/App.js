import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from './Main';
import * as actionCreators from '../actions/actionCreators';

//This maps whatever lives in our state to this.props.tasks
function mapStateToProps(state){
  return {
    tasks: state.tasks,
  }
}

// manually pass the action creators via props and use it throught the app, we pass all actions and the dispatch

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}


const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App;
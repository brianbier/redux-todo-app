import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from './Main';
import * as actionCreators from '../actions/actionCreators';

// function mapStateToProps(state){
//   return {
//     tasks: state.tasks,
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators(actionCreators, dispatch)
// }


const App = connect()(Main)

export default App;
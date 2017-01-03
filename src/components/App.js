import {connect} from 'react-redux';
import Main from './Main';

// function mapStatetoProps(state){
//   return {
//     task: state.tasks
//   }
// }

const App = connect()(Main)

export default App;
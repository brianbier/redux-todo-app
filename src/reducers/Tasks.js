// A reducer takes in two things, The action: which is information of what happen
// It also takes a copy of the current state.
// What it does is that it updates and returns a new copy.

function tasks(state=[],action){
// 	switch(action.type){
// 		case 'ADD_TODO':
// 		  return Object.assign({},state,{
// 		  	tasks: action.text
// 		  })
// 		 default:
// 		 	return state
// 	}
console.log(state,action);
return state;
}

export default tasks;
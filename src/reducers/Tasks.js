// A reducer takes in two things, The action: which is information of what happen
// It also takes a copy of the current state.
// What it does is that it updates and returns a new copy.

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text
      }
    default:
      return state
  }
}


function tasks(state=[],action){
	switch(action.type){
		case 'ADD_TODO':
		  return [
		  	...state,
		  	todo(undefined,action)
		  ]
    case 'REMOVE_TODO':
    
      return [
      ...state.slice(0,action.id),
      ...state.slice(action.id+1)
      ]
		 default:
		 	return state
	}
}

export default tasks;
function Task(state=[{
	tasks:[]
}],action){
	switch(action.type){
		case 'ADD_TODO':
		  return Object.assign({},state,{
		  	tasks: action.text
		  })
		 default:
		 	return state
	}
}

export default Task;
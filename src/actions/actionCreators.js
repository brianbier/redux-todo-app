var counter = 0;

export function addTodo(text,id){
	return {
		type: 'ADD_TODO',
    id: counter++,
    text,
	}

}


export function removeTodo(id){
  return {
    type: 'REMOVE_TODO',
    id
  }
}
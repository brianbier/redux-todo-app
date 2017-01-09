import fetch from 'isomorphic-fetch'
// var counter = 0;

export function addTodo(text,id){
	return {
		type: 'ADD_TODO',
    // id: counter++,
    text,
	}

  // return function(){
  // return {
  //   type: 'ADD_TODO',
  //   id: counter++,
  //   text,
  // }
  // }

}


export function removeTodo(id){
  return {
    type: 'REMOVE_TODO',
    id
  }
}

function receiveTodos(json){
  return {
    type: 'RECEIVE_TODOS',
    tasks: json.map(todo => todo.task)
  }
}

export function fetchPosts(){
  return dispatch => { 
    return fetch('http://localhost:8081/todos')
          .then(response => response.json())
          .then(json => dispatch(receiveTodos(json)))
  }
}
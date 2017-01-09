import fetch from 'isomorphic-fetch'

var counter = 0;

export function addTodo(text){
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

function receiveData(json){
	return {
		type: 'RECEIVE_TODOS',
		tasks: json.map(data=>data.task)
	}
}

export function fetchData(){
	return dispatch =>{
		return fetch('http://localhost:8081/todos')
				.then(response => response.json())
				.then(json => dispatch(receiveData(json)))
	}
}


export function postData(data){
	console.log(data)
	return dispatch =>{
		return fetch('http://localhost:8081/todo',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: data
		})
		.then(response =>response.json())
		.then(json => dispatch(receiveData(json)))
	}
}
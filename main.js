// const li = document.createElement("li");
const ul = document.createElement("ul");
const todoList = document.querySelector("#todoList");
const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");

let todo_item = []
let count = 0;
//todolist

// function addTodo(){
// 	const todoText = todoInput.value
// 	 if (todoText !== "") {
// 	 	count++
// 	 	const todos = {
// 	 		id: count,
// 	 		text: todoText,
// 	 		isCompleted: false
// 	 	}
// 	 	todo_item.push(todos)
// 	 	todoInput.value = ""
// 	}
// }
function  change1(){
   document.getElementById("todoList").innerHTML +=
    `
	${document.getElementById("todoInput").value}  
    `
}

// function editTodo(i){
// 	const newTodoText = prompt("Enter the new todo:", todo[i].text)
// 	if (newTodoText !== null) {
// 		todo[i].text = newTodoText
// 		// localStorage.setItem("todo_item", JSON.stringify(todo_item))
//     updateTodoList()
// 	} 
// }


// function deleteTodo(i){
//    todo.splice(i, 1)
//    updateTodoList()
// }
 



// function updateTodoList(){
// 	todoList.innerHTML = ""
// 	showTodo()
// }

// function showTodo(){
//    todoList.innerHTML = ""
// 	todo_item.forEach (function(todos, i){
//   const li = document.createElement("li")	
// 	})
// }
// li.innerText = todos.id + ": " + " " + todos.text


  
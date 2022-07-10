const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify()는 JS object를 가져와 string으로 바꾼다.
}

function deleteToDo(event){
    const li = event.target.parentElement;//target은 클릭된 HTML Element.
    li.remove(); //parentElement는 그 Eliment의 부모. 즉 여기선 li.
    localStorage.remove("");
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function hadleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse는 문자열을 배열로 바꿔준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //배열.forEach(함수)는 배열의 각 item을 인자로 함수를 실행시킨다.
    //parsedToDos.forEach((item)=>console.log("hello", item)) 함수없이 이렇게도 가능.
    //윗줄에서의 =>를 화살표함수라고 한다.
}
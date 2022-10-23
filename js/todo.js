const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.id = "todo-btn";
  button.addEventListener("click", deleteToDo);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "todo-checkbox";
  if (newTodo.check) {
    span.classList.add("text-decoration__line-through");
    checkBox.checked = true;
  } else {
    span.classList.remove("text-decoration__line-through");
    checkBox.checked = false;
  }
  checkBox.addEventListener("click", handleClickCheckbox);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleClickCheckbox(item) {
  const btn = item.target.parentElement.children[0];
  const span = item.target.parentElement.children[1];
  const check = item.target.parentElement.children[2];
  const currentToDo = toDos.filter((item) => item.text === span.innerText);
  if (btn.checked) {
    currentToDo[0].check = true;
    saveToDos();
    span.classList.toggle("text-decoration__line-through");
    btn.checked = true;
  } else {
    currentToDo[0].check = false;
    saveToDos();
    span.classList.toggle("text-decoration__line-through");
    btn.checked = false;
  }
  //   console.log(currentToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: false,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

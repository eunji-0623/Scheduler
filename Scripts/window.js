const controlTodo = document.querySelectorAll("#todo .controls .contents .material-icons");
const todo = document.querySelector("#todo .window.todo");
const timeTable = document.querySelector("#todo .window.timeTable");

const TODO_BUTTON = 2;
const TIMETABLE_BUTTON = 3;

function handleTodoWindow() {
  todo.classList.toggle("hidden");
  console.log("click");
}

function handleTimeTableWindow() {
  timeTable.classList.toggle("hidden");
}

controlTodo[TODO_BUTTON].addEventListener("click", handleTodoWindow);
controlTodo[TIMETABLE_BUTTON].addEventListener("click", handleTimeTableWindow);

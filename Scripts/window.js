const controlTodo = document.querySelectorAll("#todo .controls .contents .material-icons");
const exitButton = document.querySelectorAll("#todo .window .close");
const todo = document.querySelector("#todo .window.todo");
const timeTable = document.querySelector("#todo .window.timeTable");

const TODO_BUTTON = 2;
const TIMETABLE_BUTTON = 3;
const TODO_EXIT = 0;
const TIMETABLE_EXIT = 1;

function handleTodoWindow() {
  todo.classList.toggle("hidden");
}

function handleTimeTableWindow() {
  timeTable.classList.toggle("hidden");
}

controlTodo[TODO_BUTTON].addEventListener("click", handleTodoWindow);
controlTodo[TIMETABLE_BUTTON].addEventListener("click", handleTimeTableWindow);
exitButton[TODO_EXIT].addEventListener("click", handleTodoWindow);
exitButton[TIMETABLE_EXIT].addEventListener("click", handleTimeTableWindow);

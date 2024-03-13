const checkboxes = document.querySelectorAll("input[type=checkbox]");
const tasks = document.querySelector(".tasks");

function createTask(_startTime, _endTime, _description) {
  const task = document.createElement("div");
  task.className = "task";

  const checkWrapper = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkLabel = document.createElement("label");
  const idIndex = tasks.childElementCount + 1;
  checkWrapper.className = "check-wrapper";
  checkbox.setAttribute("type", "checkbox");
  checkbox.id = "check" + idIndex;
  checkLabel.setAttribute("for", "check" + idIndex);
  checkWrapper.append(checkbox, checkLabel);

  const timeWrapper = document.createElement("div");
  const startTime = document.createElement("div");
  const seperate = document.createElement("div");
  const endTime = document.createElement("div");
  timeWrapper.className = "time";
  startTime.textContent = _startTime;
  seperate.textContent = "~";
  endTime.textContent = _endTime;
  timeWrapper.append(startTime, seperate, endTime);

  const description = document.createElement("div");
  description.className = "description";
  description.textContent = _description;

  const icons = document.createElement("div");
  const editIcon = document.createElement("div");
  const settingIcon = document.createElement("div");
  icons.className = "icons clickable";
  editIcon.className = "material-icons";
  settingIcon.className = "material-icons";
  icons.append(editIcon, settingIcon);

  task.append(checkWrapper, timeWrapper, description, icons);
  tasks.append(task);
  task.addEventListener("change", taskState);
}

function taskState(e) {
  e.target.parentElement.parentElement.classList.toggle("done");
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", taskState);
});

// 테스트 코드
createTask("14:00", "15:00", "카페가서 케이크 먹기");

export { createdTodoListView, createdTodoView };

import "./css/todo.css";

const createdTodoListView = (todoList) => {
  const h3 = document.createElement("h3");
  h3.textContent = todoList.createdDate.toISOString().substring(0, 10);

  const listDiv = document.createElement("div");
  listDiv.appendChild(h3);
  todoList.items.forEach((item) => {
    if (item != "" && item != null) {
      listDiv.appendChild(createdTodoView(item));
    }
  });
  listDiv.classList.add("list");
  return listDiv;
};

const createdTodoView = (item) => {
  const todoDiv = document.createElement("div");
  // left div
  const leftDiv = document.createElement("div");
  const h4 = document.createElement("h4");
  const label = document.createElement("label");
  const dueDateInput = document.createElement("input");
  h4.textContent = item.title;
  label.textContent = "Due date: ";
  dueDateInput.setAttribute("type", "date");
  dueDateInput.valueAsDate = item.dueDate;
  leftDiv.appendChild(h4);
  leftDiv.appendChild(label);
  leftDiv.appendChild(dueDateInput);
  // right div
  const rightDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const priorityDiv = document.createElement("div");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = item.finished;
  todoDiv.classList.add(`${item.finished}`);
  priorityDiv.classList.add(`priority_${item.priority}`);
  rightDiv.appendChild(priorityDiv);
  rightDiv.appendChild(checkbox);
  // event Listener
  dueDateInput.addEventListener("input", (e) => {
    item.dueDate = new Date(e.target.value);
    alert("Chang due date at " + e.target.value);
  });
  checkbox.addEventListener("input", (e) => {
    let checked = e.target.checked;
    todoDiv.classList.remove(`${item.finished}`);
    todoDiv.classList.add(`${checked}`);
    item.finished = checked;
    alert(`Finished : ${checked}`);
  });
  priorityDiv.addEventListener("click", (e) => {
    let priority = prompt("Priority: 0 for red, 1 for yellow, 2 for blue");
    if (priority && priority >= 0 && priority < 3) {
      priorityDiv.classList.remove(`priority_${item.priority}`);
      todoDiv.classList.remove(`background_${item.priority}`);
      priorityDiv.classList.add(`priority_${priority}`);
      todoDiv.classList.add(`background_${priority}`);
      item.priority = priority;
      alert(`Change priority at ${priority}`);
    }
  });

  todoDiv.appendChild(leftDiv);
  todoDiv.appendChild(rightDiv);
  todoDiv.setAttribute("id", "todo");
  todoDiv.classList.add(`background_${item.priority}`);
  return todoDiv;
};

function updateDueDate() {
  const dueDate = document.querySelector(`input[type='date']`);
  dueDate.addEventListener("input", (e) => {
    e.target.value;
    alert(e.target.value);
  });
}

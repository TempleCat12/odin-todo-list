export {
  createHeaderView,
  createNavBoxView,
  createTodayBoxView,
  createAllBoxView,
};
import { Todo, TodoList, projects} from "./data";
import { createdTodoListView, createdTodoView } from "./todo";
import "./css/view.css";
import "./css/todo.css";

const createTodoForm = () => {
  const todoForm = document.createElement("form");
  const title = document.createElement("input");
  const desc = document.createElement("input");
  const div_d = document.createElement("div");
  const label_d = document.createElement("label");
  const dueDate = document.createElement("input");
  const div_p = document.createElement("div");
  const label_p = document.createElement("label");
  const priority = document.createElement("input");
  const div_b = document.createElement("div");
  const submit = document.createElement("button");
  const cancel = document.createElement("button");

  title.type = "text";
  title.placeholder = "title";
  title.minLength = 5;
  title.required = true;

  desc.type = "text";
  desc.placeholder = "description...";

  label_d.textContent = "due date: ";
  dueDate.type = "date";
  dueDate.valueAsDate = new Date();

  label_p.textContent = "priority: ";
  priority.type = "number";
  priority.min = 0;
  priority.max = 2;
  priority.value = 2;

  submit.textContent = "submit";
  cancel.textContent = "cancel";
  cancel.setAttribute('type', 'button')
  cancel.onclick = refreshTodayBox
  todoForm.action = "";

  div_d.appendChild(label_d);
  div_d.appendChild(dueDate);
  div_p.appendChild(label_p);
  div_p.appendChild(priority);
  div_b.appendChild(cancel);
  div_b.appendChild(submit);
  todoForm.appendChild(title);
  todoForm.appendChild(desc);
  todoForm.appendChild(div_d);
  todoForm.appendChild(div_p);
  todoForm.appendChild(div_b);
  submit.setAttribute("id", "submit");
  cancel.setAttribute("id", "cancel");
  todoForm.setAttribute("id", "todoForm");
  return todoForm;
};

const createAllBoxView = (projects) => {
  if (projects.length > 0) {
    const allBox = document.createElement("div");
    projects.forEach((todoList) => {
      if (todoList.items.length > 0) {
        allBox.appendChild(createdTodoListView(todoList));
      }
    });
    allBox.setAttribute("id", "allBox");
    return allBox;
  }
};

const createTodayBoxView = () => {
  const mainRightDiv = document.createElement("div");
  // default
  const todayBox = document.createElement("div");
  const topDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const addDiv = document.createElement("div");
  const addSvg = createSVG("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", 24);
  const addP = document.createElement("p");

  h2.textContent = "Today";
  p.textContent = new Date().toISOString().substring(0, 10);
  addP.textContent = "Add task";

  addDiv.addEventListener("click", showAndSaveForm);
  topDiv.appendChild(h2);
  topDiv.appendChild(p);
  addDiv.appendChild(addSvg);
  addDiv.appendChild(addP);
  todayBox.appendChild(topDiv);
  appendTodoView(todayBox);

  todayBox.appendChild(addDiv);
  mainRightDiv.appendChild(todayBox);

  addDiv.setAttribute("id", "addDiv");
  todayBox.setAttribute("id", "todayBox");
  return todayBox;
};
const createNavBoxView = () => {
  const navBox = document.createElement("div");

  const todayNav = document.createElement("div");
  const todayBtn = document.createElement("button");
  const todaySvg = createSVG(
    "M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z",
    30
  );
  const allNav = document.createElement("div");
  const allBtn = document.createElement("button");
  const allSvg = createSVG(
    "M14 10H3V12H14V10M14 6H3V8H14V6M3 16H10V14H3V16M21.5 11.5L23 13L16 20L11.5 15.5L13 14L16 17L21.5 11.5Z",
    30
  );

  todayBtn.textContent = "Today Tasks";
  allBtn.textContent = "All Tasks";

  todayNav.appendChild(todaySvg);
  todayNav.appendChild(todayBtn);
  allNav.appendChild(allSvg);
  allNav.appendChild(allBtn);
  navBox.appendChild(todayNav);
  navBox.appendChild(allNav);

  allNav.onclick = showAllBox;
  todayNav.onclick = showTodayBox;

  todayBtn.setAttribute("id", "today-link");
  allBtn.setAttribute("id", "all-link");
  navBox.setAttribute("id", "navBox");
  return navBox;
};
const createHeaderView = () => {
  const headerDiv = document.createElement("div");

  const leftDiv = document.createElement("div");
  const menuBtn = document.createElement("button");
  const homeBtn = document.createElement("button");
  const h1 = document.createElement("h1");
  const menuIcon = createSVG(
    "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
    30
  );
  const homeIcon = createSVG(
    "M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z",
    30
  );
  h1.textContent = "TODO LIST";

  menuBtn.appendChild(menuIcon);
  homeBtn.appendChild(homeIcon);
  leftDiv.appendChild(menuBtn);
  leftDiv.appendChild(homeBtn);
  leftDiv.appendChild(h1);
  headerDiv.appendChild(leftDiv);

  const rightDiv = document.createElement("div");
  const addBtn = document.createElement("button");
  const helpBtn = document.createElement("button");
  const bellBtn = document.createElement("button");
  const userImg = document.createElement("div");
  const addIcon = createSVG("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", 30);
  const helpIcon = createSVG(
    "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z",
    30
  );
  const bellIcon = createSVG(
    "M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z",
    30
  );

  addBtn.appendChild(addIcon);
  helpBtn.appendChild(helpIcon);
  bellBtn.appendChild(bellIcon);
  rightDiv.appendChild(addBtn);
  rightDiv.appendChild(helpBtn);
  rightDiv.appendChild(bellBtn);
  rightDiv.appendChild(userImg);
  headerDiv.appendChild(rightDiv);

  headerDiv.setAttribute("id", "header");
  userImg.setAttribute("id", "userImg");
  menuBtn.setAttribute("id", "menuBtn");
  homeBtn.setAttribute("id", "homeBtn");
  addBtn.setAttribute("id", "addBtn");
  helpBtn.setAttribute("id", "helpBtn");
  bellBtn.setAttribute("id", "bellBtn");

  menuBtn.addEventListener("click", toggleNavBox);

  return headerDiv;
};

const todayTodoList = new TodoList(new Date());
projects.push(todayTodoList);

const appendTodoView = (todayBox) => {
  let items = todayTodoList.items;
  if (todayTodoList != null && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      todayBox.appendChild(createdTodoView(items[i]));
    }
  }
};

// User interface

// Inner function
function toggleNavBox() {
  document.getElementById("navBox").classList.toggle("hidden");
}

function createSVG(d, size) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconSvg.setAttribute("fill", "currentColor");
  iconSvg.setAttribute("width", size);
  iconSvg.setAttribute("height", size);
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconSvg.setAttribute("stroke", "currentColor");
  iconPath.setAttribute("d", d);

  iconSvg.appendChild(iconPath);
  return iconSvg;
}

function showAndSaveForm() {
  const addDiv = document.getElementById("addDiv");
  const todayBox = document.getElementById("todayBox");
  todayBox.insertBefore(createTodoForm(), addDiv);
  addDiv.classList.add("hidden");
  //save data
  const todoForm = document.getElementById("todoForm");
  let todo = {};
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll("#todoForm input");
    todo = new Todo(
      inputs[0].value,
      inputs[1].value,
      new Date(inputs[2].value),
      inputs[3].value
    );
    todayTodoList.items.push(todo);
    refreshTodayBox()
  });
}

function showAllBox() {
  const box = document.getElementById("todayBox");
  if (box != null) {
    const main = document.getElementById("main");
    main.removeChild(document.getElementById("todayBox"));
    main.appendChild(createAllBoxView(projects));
  }
}
function showTodayBox() {
  const box = document.getElementById("allBox");
  if (box != null) {
    const main = document.getElementById("main");
    main.removeChild(document.getElementById("allBox"));
    main.appendChild(createTodayBoxView());
  }
}
function refreshAllBox() {
    const main = document.getElementById("main");
    main.removeChild(document.getElementById("allBox"));
    main.appendChild(createAllBoxView(projects));
}
function refreshTodayBox() {
    const main = document.getElementById("main");
    main.removeChild(document.getElementById("todayBox"));
    main.appendChild(createTodayBoxView());
}

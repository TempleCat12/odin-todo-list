import { Todo, TodoList, projects, Priorities } from "./data";
import {
  createHeaderView,
  createNavBoxView,
  createTodayBoxView,
} from "./view";
import "./css/index.css";


// Create html structure
const contentDiv = document.getElementById("content");
const main = document.createElement("div");
main.setAttribute("id", "main");
main.appendChild(createNavBoxView());
main.appendChild(createTodayBoxView());
contentDiv.appendChild(createHeaderView());
contentDiv.appendChild(main);


// example data
const dueDate = new Date(2023, 1, 3, 13, 30); // args: year, month, day, hour, minute, second, ms
const studyTodo = new Todo(
  "study english",
  "watch tech show on youtube",
  dueDate,
  Priorities[0]
);
const skillTodo = new Todo(
  "google search syntax",
  "read google document",
  dueDate,
  Priorities[1]
);
const exerciseTodo = new Todo("30min running", "", dueDate, Priorities[2]);
const exampleList = new TodoList(new Date("2023-02-04"));
exampleList.add(studyTodo);
exampleList.add(skillTodo);
exampleList.add(exerciseTodo);
projects.push(exampleList);


// mainDiv.appendChild(createdTodoListView(todoList))
// contentDiv.appendChild(mainDiv)

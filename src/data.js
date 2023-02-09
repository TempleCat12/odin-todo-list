export { Todo, TodoList, projects, Priorities };

class Todo {
  constructor(
    title,
    desc,
    dueDate,
    priority = 2,
    finished = false,
    index
  ) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    // color red for 0, yellow for 1, blue for 2
    this.priority = priority;
    this.finished = finished;
    // index is the place where the list put item in
    this.index = index;
  }
}

class TodoList {
  constructor(createdDate, items = []) {
    this.items = items;
    this.createdDate = createdDate;
  }
  add(item) {
    this.items.push(item);
  }
  read(index) {
    return this.items[index];
  }
  update(index, item) {
    this.items[index] = item;
  }
  delete(index) {
    this.items.splice(index, 1);
  }
}

const projects = [];
const Priorities = [0, 1, 2];

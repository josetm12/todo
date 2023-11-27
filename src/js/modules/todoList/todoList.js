import todoObj from '../todo/todo.js';

//Wanted to use factory function at first but decided to keep things consistent with the new class keyword style definition
/**
 * Keeping the default parentId null for the List Obj since I am planning to keep "Today" list as a special one off case where all todos go there by default
 * Does not make sense to overly complicate the today list with another layer of hierarchy
 **/
export default class {
  constructor({ id, projectId, title, description }) {
    this.id = id;
    this.projectId = projectId || null;
    this.title = title;
    this.description = description;
    this.completed = 0;
    this.todoList = [];
  }

  //Update the projectID for the list as well as all the todo items under the list
  updateProjectId(projectId) {
    this.projectId = projectId;

    this.todoList = this.todoList.map(function (todo) {
      todo.projectId = projectId;
    });
  }

  /**
   * --If no arguments are given, all the todo itemss under the list are returned
   * --For only today items, pass 'dueBy' as param and 'today' or today's date as value
   **/
  getTodos(param, value) {
    const getAll = arguments.length === 0 || !param;

    if (getAll) return this.todoList;

    return this.todoList.filter((todo) => {
      return todo[param] === value;
    });
  }

  addTodo(todo) {
    let newTodo = new todoObj({
      ...todo,
      ...{ listId: this.id, projectId: this.projectId },
    });
    this.todoList.push(newTodo);
  }

  removeTodo(id, todoToDel) {
    this.todoList = this.todoList.filter(function (todo) {
      if (todoToDel && todoToDel.id) {
        return todo.id !== todoToDel.id;
      } else {
        return todo.id !== id;
      }
    });
  }

  removeAllTodos() {
    let list = Array.from(this.todoList);
    this.todoList.length = 0;

    return list;
  }

  checkProgress() {
    let newCompleted = 0;
    let length = this.todoList.length;
    this.todoList.reduce(function (completed, todo) {
      if (todo.isDone()) completed++;
      return completed;
    }, newCompleted);

    this.completed = newCompleted;
    return Math.floor((this.completed * 100) / length);
  }

  isDone() {
    return this.todoList.length === this.completed;
  }
}

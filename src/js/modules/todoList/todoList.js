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

  addTodoId(todoId) {
    this.todoList.push(todoId);
  }

  removeTodoId(id) {
    this.todoList = this.todoList.filter(function (todo) {
      return todo.id !== id;
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

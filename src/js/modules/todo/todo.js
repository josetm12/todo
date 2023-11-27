//Let's use the new class based style for creating objects here
export default class {
  constructor({ id, title, dueBy, priority }) {
    this.id = id;
    this.listId = 'today';
    this.projectId = null;
    this.title = title;
    this.dueBy = new Date(dueBy);
    this.done = false;
    this.priority = priority;
  }

  isDone() {
    return !!this.done;
  }
}

import { format } from 'date-fns';

//Let's use the new class based style for creating objects here
export default class {
  constructor({ id, title, dueBy, priority }) {
    this.id = id;
    this.listId = 'today';
    this.projectId = null;
    this.title = title;
    this.dueBy = format(new Date(dueBy), 'MM/dd/yyyy');
    this.done = false;
    this.priority = priority; // can be 1, 2, 3 in the order of severity (high, med, low); anything below 3 means there is no set priority i.e. no tag needed
  }

  isDone() {
    return !!this.done;
  }
}

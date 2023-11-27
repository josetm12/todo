//import {format} from 'date-fns';
import Utility from '../../util/utility';
import create from './services/create/create';

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};

if (!localStorage.getItem('projectIds')) {
  let projectIds = localStorage.setItem('projectIds', []);
} else {
  let projectIds = localStorage.getItem('projectIds');
}

let todoIdGenerator = Utility.idGenerator();
let listIdGenerator = Utility.idGenerator('l');
let projectIdGenerator = Utility.idGenerator('p');

const createTodo = () => {
  let id = todoIdGenerator.next();
  create.createTodo(id, details);
};

console.log('Testing');

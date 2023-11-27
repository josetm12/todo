//import {format} from 'date-fns';
import Utility from '../../util/utility';
import create from './services/create/create';
import loadInitialData from './services/search/search';
import { allProjects, allLists, allTodos } from '../../util/storage';

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};

let todoIdGenerator = Utility.idGenerator();
let listIdGenerator = Utility.idGenerator('l');
let projectIdGenerator = Utility.idGenerator('p');

function loadInitialData() {
  return new Promise((resolve) => {
    let appStorageKey = CONFIG.getConfig('appStorageKey');
    allProjects = localStorage.getObject(`${appStorageKey}-projects`);
    allLists = localStorage.getObject(`${appStorageKey}-lists`);
    allTodos = localStorage.getObject(`${appStorageKey}-todos`);

    resolve({ success: true, data: allTodos });
  });
}

const renderData = () => {
  console.log('All Projects');
  console.table(allProjects);

  console.log('All Lists');
  console.table(allLists);

  console.log('All Todos');
  console.table(allTodos);
};

async function renderInitialData() {
  console.log('calling');
  loadInitialData().then((value) => {
    renderData();
  });
  // Expected output: "resolved"
}

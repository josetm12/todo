import { allProjects, allLists, allTodos } from '../../util/storage';
import { format } from 'date-fns';

const getRecords = (recordsArray, param, value) => {
  if (processArguments.length === 0 || !param) return [];

  return recordsArray.filter((todo) => recordsArray[param] === value);
};

const getTodos = (param, value) => {
  return getRecords(allTodos, param, value);
};

const getLists = (param, value) => {
  return getRecords(allLists, param, value);
};

const getProjects = (param, value) => {
  return getRecords(allProjects, param, value);
};

const getTodayTodos = (param, value) => {
  return getRecords(allTodos, 'dueBy', format(new Date(), 'MM/dd/yyyy'));
};

export { getTodos, getLists, getProjects, getTodayTodos };

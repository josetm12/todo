import todo from '../../modules/todo/todo';

import { allLists, allTodos } from '../../util/storage';
import OBJ_HELPER_FNS from '../../helpers/Object';
import CONFIG from '../../util/config';

const createTodo = (details) => {
  if (!details || !details.id || !details.title)
    throw new Error('List Obj: Invalid data used for creation!');

  let todoObj = new todoList({
    id: details.id,
    title: details.title,
    listId: details.listId,
    projectId: details.projectId,
    priority: details.priority || 9,
  });

  writeToStorage(todoObj);

  return todoObj;
};

//This is a 2 part process: Create an item for just storing the todo and then update the list's todoList array
const writeToStorage = (todoObj) => {
  let appStorageKey = CONFIG.getConfig('appStorageKey');
  let activeListId = todoObj.listId;
  let activeList = allLists.find((list) => list.id === activeListId);

  checkErrors(appStorageKey, projectList, activeList);
  activeList.addChildListId(listObj.id);
  allTodos.push(todoObj);

  localStorage.setObject(
    `${appStorageKey}-todos`,
    OBJ_HELPER_FNS.getObjectDetailsArray(allTodos)
  );
  localStorage.setObject(
    `${appStorageKey}-lists`,
    OBJ_HELPER_FNS.getObjectDetailsArray(allLists)
  );

  return projectList;
};

function checkErrors(appStorageKey, projectList, activeList) {
  if (!appStorageKey)
    throw new Error('App Storage Master Key not defined in config.');
  if (projectList.length === 0) throw new Error('No active project.');
  if (!activeList) throw new Error('Invalid list selected.');
}

export default createTodoList;

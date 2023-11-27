import todoList from '../../modules/todoList/todoList';

import { allProjects, allLists } from '../../util/storage';
import OBJ_HELPER_FNS from '../../helpers/Object';
import CONFIG from '../../util/config';

const createTodoList = (details) => {
  if (!details || !details.id || !details.title)
    throw new Error('List Obj: Invalid data used for creation!');

  let listObj = new todoList({
    id: details.id,
    title: details.title,
    projectId: details.projectId,
    description: details.description,
  });

  writeToStorage(listObj);

  return listObj;
};

//This is a 2 part process: Create an item for just storing the list and then update the projects' listId array
const writeToStorage = (listObj) => {
  let appStorageKey = CONFIG.getConfig('appStorageKey');
  let activeProjectId = listObj.projectId;

  let activeProject = allProjects.find(
    (project) => project.id === activeProjectId
  );

  checkErrors(appStorageKey, projectList, activeProject);
  activeProject.addChildListId(listObj.id);
  allLists.push(listObj);

  localStorage.setObject(
    `${appStorageKey}-projects`,
    OBJ_HELPER_FNS.getObjectDetailsArray(allProjects)
  );
  localStorage.setObject(
    `${appStorageKey}-lists`,
    OBJ_HELPER_FNS.getObjectDetailsArray(allLists)
  );

  return projectList;
};

function checkErrors(appStorageKey, projectList, activeProject) {
  if (!appStorageKey)
    throw new Error('App Storage Master Key not defined in config.');
  if (projectList.length === 0) throw new Error('No active project.');
  if (!activeProject) throw new Error('Project cannot be found.');
}

export default createTodoList;

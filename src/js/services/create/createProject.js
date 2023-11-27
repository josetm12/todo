import project from '../../modules/project/project';

import OBJ_HELPER_FNS from '../../helpers/Object';
import CONFIG from '../../util/config';

const createProject = (details) => {
  if (!details || !details.id || !details.title)
    throw new Error('Project Obj: Invalid data used for creation!');

  let projectObj = new project({
    id: details.id,
    title: details.title,
    description: details.description,
  });

  writeToStorage(projectObj);

  return projectObj;
};

const writeToStorage = (projectObj) => {
  let appStorageKey = CONFIG.getConfig('appStorageKey');
  if (!appStorageKey)
    throw new Error('App Storage Master Key not defined in config.');

  let projectList = localStorage.getObject(appStorageKey) || [];

  projectList.push(OBJ_HELPER_FNS.getObjectDetails(projectObj));
  localStorage.setObject(appStorageKey, projectList);

  return projectList;
};

export default createProject;

import project from '../../modules/project/project';

import OBJ_HELPER_FNS from '../../helpers/Object';
import CONFIG from '../../util/config';

//To delete a project, pass the id; Ensure that all the child lists and todo items under the project are also deleted
const deleteProject = (details) => {
  if (!details) throw new Error('Project Obj: No ID passed for deletion!');
};

const deleteFromStorage = (projectObj) => {};

export default deleteProject;

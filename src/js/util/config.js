export default class {
  constructor(id) {
    this.id = id;
    this.localStorageKey = 'todo-app';
    this.activeProject = null;
  }

  getConfig(key) {
    return this[key];
  }

  set configValues(updatedConfig) {
    if (!updatedConfig || typeof updatedConfig !== 'object') return false;

    Object.getOwnPropertyNames(updatedConfig).forEach(function (key) {
      this[key] = updatedConfig[key];
    });

    return true;
  }

  get configValues() {
    let details = {};

    Object.getOwnPropertyNames(this).forEach(function (key) {
      details[key] = this[key];
    });
    return details;
  }
}

export default class {
  static setObjectDetails(obj, details) {
    if (!!details || !!obj) return false;

    Object.getOwnPropertyNames(obj).forEach(function (key) {
      obj[key] = details[key];
    });
    return obj;
  }

  static getObjectDetails(obj) {
    let details = {};

    Object.getOwnPropertyNames(obj).forEach(function (key) {
      details[key] = obj[key];
    });
    return details;
  }
}

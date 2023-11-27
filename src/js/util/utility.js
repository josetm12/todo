export default class {
  static isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  static *idGenerator(type) {
    let p = 0,
      l = 0,
      t = 0;

    while (true) {
      switch (type) {
        case 'p':
          yield `p-${p++}`;
          break;
        case 'l':
          yield `l-${l++}`;
          break;
        default:
          yield t++;
      }
    }
  }
}

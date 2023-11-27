export default class {
  constructor({ id, title, description }) {
    this.id = id;
    this.title = title;
    this.description = description || '';
    this.childListIds = [];
  }

  set childListIds(ids) {
    this.childListIds = Array.from(ids);
  }

  get childListIds() {
    return this.childListIds;
  }

  addChildListId(id) {
    this.childListIds.push(id);
  }

  removeChildListId(id) {
    let newListIds = this.childListIds.filter((id) => list.id !== id);
    this.childListIds = newListIds;

    return this.childListIds;
  }

  removeAllChildListIds() {
    let childListIds = Array.from(this.childListIds);
    this.childListIds.length = 0;

    return childListIds;
  }
}

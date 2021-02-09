const keyName = 'tags';
type TagsModel = {
  data: string[];
  fetch: () => string[];
  create: (tag: string) => void;
  save: () => void;
}
const tagsModel: TagsModel = {
  data: [],
  create(tag) {
    this.data.push(tag);
    this.save();
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(keyName) || '[]');
    return this.data;
  },
  save() {
    localStorage.setItem(keyName, JSON.stringify(this.data));
  },
};

export default tagsModel;
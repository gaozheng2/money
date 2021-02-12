import {createId} from '@/lib/createId';

const keyName = 'tags';
const tagsModel: TagsModel = {
  data: [],
  create(name) {
    const names = this.data.map((item) => item.name); // 获取所有 name
    if (name && names.indexOf(name) < 0) {
      const newTag: Tag = {
        id: createId(),
        name: name,
      };
      this.data.push(newTag);
      this.save();
    }
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(keyName) || '[]');
    return this.data;
  },
  save() {
    localStorage.setItem(keyName, JSON.stringify(this.data));
  },
  update(id, name) {
    const idList = this.data.map((item) => item.id);
    const index = idList.indexOf(id);
    if (index >= 0) {
      const names = this.data.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        this.data[index].name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id) {
    const idList = this.data.map((item) => item.id);
    const index = idList.indexOf(id);
    if (index >= 0) {
      this.data.splice(index, 1);
      this.save();
    }
  }
};

export default tagsModel;

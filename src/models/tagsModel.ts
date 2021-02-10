const keyName = 'tags'
type TagsModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string | null) => void;
  save: () => void;
}
const tagsModel: TagsModel = {
  data: [],
  create(name) {
    if (name && this.data && this.data.indexOf(name) < 0) {
      this.data.push(name)
      this.save()
    }
  },
  fetch() {
    this.data = JSON.parse(localStorage.getItem(keyName) || '[]')
    return this.data
  },
  save() {
    localStorage.setItem(keyName, JSON.stringify(this.data))
  },
}

export default tagsModel

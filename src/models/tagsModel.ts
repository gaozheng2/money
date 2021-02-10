const keyName = 'tags'

type Tag = {
  id: string;
  name: string;
}
type TagsModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string | null) => void;
  save: () => void;
}

const tagsModel: TagsModel = {
  data: [],
  create(name) {
    const names = this.data.map((item) => item.name) // 获取所有 name
    if (name && names.indexOf(name) < 0) {
      const newTag: Tag = {
        id: name,
        name: name,
      }
      this.data.push(newTag)
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

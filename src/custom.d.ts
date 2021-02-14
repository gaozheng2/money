type MoneyData = {
  tags: string[];
  notes: string;
  type: string;
  num: number;
  date?: Date; // ? 代表可以不存在
}

type Tag = {
  id: string;
  name: string;
}

// type TagsModel = {
//   data: Tag[];
//   fetch: () => Tag[];
//   create: (name: string | null) => void;
//   save: () => void;
//   update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//   remove: (id: string) => void;
// }
//
// interface Window {
//   tagList: Tag[];
//   createTag: (name: string) => void;
//   removeTag: (id: string) => void;
// }
import Vue from 'vue';
import Vuex from 'vuex';
import {clone} from '@/lib/clone';
import {createId} from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    moneyDataList: JSON.parse(localStorage.getItem('moneyData') || '[]'),
    tags: JSON.parse(localStorage.getItem('tags') || '[]')
  },
  mutations: {
    createMoney(state, item: MoneyData) {
      const newData = clone(item);
      newData.date = new Date();
      state.moneyDataList.push(newData);
      store.commit('saveMoney');
    },
    saveMoney(state) {
      localStorage.setItem('moneyData', JSON.stringify(state.moneyDataList));
    },
    createTag(state, name: string) {
      const names = state.tags.map((item: Tag) => item.name); // 获取所有 name
      if (name && names.indexOf(name) < 0) {
        const newTag: Tag = {
          id: createId(),
          name: name,
        };
        state.tags.push(newTag);
        store.commit('saveTag');
      }
    },
    updateTag(state, payload: { id: string; name: string }) {
      const {id, name} = payload;
      const idList = state.tags.map((item: Tag) => item.id);
      const index = idList.indexOf(id);
      if (index >= 0) {
        const names = state.tags.map((item: Tag) => item.name);
        if (name && names.indexOf(name) < 0) {
          state.tags[index].name = name;
          store.commit('saveTag');
        }
      }
    },
    removeTag(state, id: string) {
      const idList = state.tags.map((item: Tag) => item.id);
      const index = idList.indexOf(id);
      if (index >= 0) {
        state.tags.splice(index, 1);
        store.commit('saveTag');
      }
    },
    saveTag(state) {
      localStorage.setItem('tags', JSON.stringify(state.tags));
    },
  },
});

export default store;
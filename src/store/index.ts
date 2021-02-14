import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { // 数据（data）
    count: 0
  },
  mutations: { // 对数据的操作（method）
    increment(state, n: number) {
      state.count += n;
    }
  },
  actions: {},
  modules: {}
});

export default store;
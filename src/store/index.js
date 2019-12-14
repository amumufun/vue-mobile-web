import Vue from 'vue';
import Vuex from 'vuex';
// import auth from '../common/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  // 不要过度使用
  state: {
    userinfo: {},
  },
  mutations: {
    setUserInfo(state, userinfo) {
      state.userinfo = userinfo;
    },
  },
  actions: {},
});

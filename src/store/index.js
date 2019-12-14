import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
    screenHeight: screen.height,
    isMobile: false
  },
  mutations: {},
  actions: {},
  modules: {}
});

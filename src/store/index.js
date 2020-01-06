import Vue from "vue";
import Vuex from "vuex";
import modulesJson from "../assets/modules.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
    screenHeight: screen.height,
    isMobile: false,
    activePortalPath: null,
    navigationOpen: true
  },
  getters: {
    modulesData: () => {
      return modulesJson.modules
        .filter(m => m.portal === "Policy" && Number.isInteger(m.portalNum))
        .sort((a, b) => a.portalNum - b.portalNum);
    },
    activePortal: (state, getters) => {
      return getters.modulesData.find(d => d.path === state.activePortalPath);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

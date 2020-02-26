import Vue from "vue";
import Vuex from "vuex";
import modulesJson from "../assets/modules.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
    screenHeight: window.innerHeight,
    isMobile: window.innerWidth < 700,
    activePortalPath: "intro",
    navigationOpen: false,
    reflowTime: null,
    downloadOpen: false
  },
  getters: {
    modulesData: (state) => {
      const additionalItems = [
        { path: "intro", maintopic: "Intro", portalnum: -1, simple: true },
        { path: "earth", maintopic: "Extreme Events", portalnum: 7, simple: state.isMobile },
        { path: "end", maintopic: "Continue", portalnum: 100 }
      ];

      return modulesJson.generals
        .filter(m => m.portal === "Policy" && Number.isInteger(m.portalnum))
        .concat(...additionalItems)
        .sort((a, b) => a.portalnum - b.portalnum);
    },
    activePortal: (state, getters) => {
      return getters.modulesData.find(d => d.path === state.activePortalPath);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

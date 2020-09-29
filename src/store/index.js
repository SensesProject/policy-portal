import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollY: 0,
    screenHeight: window.innerHeight,
    isMobile: window.innerWidth < 700,
    activePortalPath: "intro",
    navigationOpen: false,
    reflowTime: null,
    downloadOpen: false,
    modulesJson: []
  },
  getters: {
    modulesData: (state) => {
      const additionalItems = [
        { path: "intro", mainTopic: "Welcome", portalNum: -1, simple: true },
        { path: "earth", mainTopic: "Extreme Events", portalNum: 1, simple: state.isMobile },
        { path: "end", mainTopic: "Continue", portalNum: 100 }
      ];

      if (state.modulesJson.length) {
        const element = state.modulesJson
          .filter(m => m.id === "emissions-gap")
        return state.modulesJson
          .filter(m => m.portal === "Policy" && Number.isInteger(m.portalNum))
          .concat(...additionalItems)
          .concat(element)
          .sort((a, b) => a.portalNum - b.portalNum);
      } else {
        return []
      }
    },
    activePortal: (state, getters) => {
      return getters.modulesData.find(d => d.path === state.activePortalPath);
    }
  },
  mutations: {
    MODULES_CHANGE (state, data) {
      state.modulesJson = data
    },
  },
  actions: {
    loadModules ({ commit }) {
      axios.get('https://dev.climatescenarios.org/settings/modules.json')
        .then((response) => {
          commit('MODULES_CHANGE', response.data.modules)
        })
    }
  },
  modules: {}
});

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
        { path: "intro", mainTopic: "Intro", portalNum: -1, simple: true },
        { path: "earth", mainTopic: "Extreme Events", portalNum: 0, simple: state.isMobile },
        { path: "end", mainTopic: "Continue", portalNum: 100 }
      ];

      if (state.modulesJson.length) {
        let items = []

        state.modulesJson.map(m => {
          if(m.portal !== undefined && m.portal !== null && m.portal.includes("Policy")) {
            items.push(m)
          }
        })

        return items
          // Filter to avoid showing primer as tile
          .filter(m => m.id !== 'primer' && Number.isInteger(m.portalNum))
          .concat(...additionalItems)
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

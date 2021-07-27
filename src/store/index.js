import Vue from "vue";
import Vuex from "vuex";

import chartofaccounts from "./chartofaccounts/index.js";


Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      drawer: true,
    };
  },
  modules: {
    chartofaccounts: chartofaccounts,
  }
});

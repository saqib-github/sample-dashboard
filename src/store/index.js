import Vue from "vue";
import Vuex from "vuex";
import employeeModule from "./modules/employee/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
        return {
            drawer: true,
        };
    },
    mutations: {},
    actions: {},
    modules: {
        employeeModule: employeeModule,
    },
});
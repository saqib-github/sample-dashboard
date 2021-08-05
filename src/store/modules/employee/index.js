import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      emloyees: [
        {
          company_id: "", // required
          name: "Header", // required
          father_name: "John", // required
          email: "john@email.com", // required
          phone_number: "03410491234", // required
          city: "San Francisco", // required
          country: "US", // required
          joining_date: Date.now().toString(), // required
          leaving_date: Date.now().toString(), // optional
          salary: 0, // required
          bonus_amount:0, // optional, default to 0
          internee_status: false, // if true he is internee in the company
          employee_status: false, // if true he is permanent employee in the company
          contract_signature_date: Date.now().toString(), // optional
          contract_ending_date: Date.now().toString(), // optional but when the contract is signed then required
        },
      ],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};

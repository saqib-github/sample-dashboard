export default {
  getData(state) {
    return state.data;
  },
  getTypes(state){
    return state.types;
  },
  getAllAccounts(state){
     let all_accounts = [];
     for (let i = 0; i < state.data.length; i++){
       for(let j = 0; j < state.data[i].head_accounts.length; j++){
         all_accounts.push(state.data[i].head_accounts[j]);
       }
     }
     return all_accounts;
  }
};

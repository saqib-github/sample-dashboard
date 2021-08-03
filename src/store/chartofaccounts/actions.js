import axios from "axios";
export default {
  addData(context, data) {
    const newData = {
      type: data.type,
      sub_type: data.sub_type,
      sub_category: data.sub_category,
      head_accounts: data.head_accounts,
    };
    axios
      .post("http://localhost:3000/chartofaccounts", newData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    context.commit("addData", newData);
    console.log("new Data", newData);
  },
  addType(context, type) {
    context.commit("addType", type);
  },
  getAllData: async (context) => {
    await axios
      .get("http://localhost:3000/chartofaccounts")
      .then(function (response) {
        // handle success
        const newData = response.data;
        context.commit("getAllData", newData);
        console.log('all data action method', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};

export default {
  addData(context, data) {
    const newData = {
      id: data.id,
      type: data.type,
      sub_type: data.sub_type,
      sub_category: data.sub_category,
      head_accounts: data.head_accounts,
    };

    context.commit("addData", newData);
    console.log("new Data", newData);
  },
  addType(context, type) {
    context.commit("addType", type);
  },
};

import pkg from "mongoose";
const { Schema, model } = pkg;

const data = Schema(
  {
    type: String,
    sub_type: String,
    sub_category: String,
    head_accounts: [
        {
            account_code: Number,
            account_name: String,
            credit: Number,
            debit: Number,
          },
    ],
  },
  { collection: "chartofaccounts" }
);
export default model( "data", data);

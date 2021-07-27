import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
export default {
  namespaced: true,
  state() {
    return {
      data: [
        {
          id: "1",
          type: "assets",
          sub_type: "fixed Asset",
          sub_category: "fixed asset sub category",
          head_accounts: [],
        },
        {
          id: "6",
          type: "assets",
          sub_type: "current Asset",
          sub_category: "current asset sub category",
          head_accounts: [],
        },
        {
          id: "2",
          type: "liability",
          sub_type: "liability subtype",
          sub_category: "liability sub category",
          head_accounts: [],
        },
        {
          id: "3",
          type: "equity",
          sub_type: "equity subtype",
          sub_category: "equity sub category",
          head_accounts: [],
        },
        {
          id: "4",
          type: "revenue",
          sub_type: "revenue subtype",
          sub_category: "revenue sub category",
          head_accounts: [],
        },
        {
          id: "5",
          type: "expences",
          sub_type: "expences subtype",
          sub_category: "expences sub category",
          head_accounts: [],
        },
      ],
      // {
      //   sub_category: "one",
      //   account_name: "kdnsned", // optional
      //   account_code: "78732", // optional
      //   credit: "5000", // optional
      //   debit: "9747", // optional
      //   opening_date: "26-03-2016", // optional
      //   total_balance: "60000", // optional
      // },

      // types: [
      //   {
      //     assets: [
      //       {
      //         asset_sub_types: [
      //           {
      //             current_assets: [
      //               {
      //                 curent_asset_sub_categories: [
      //                   {
      //                     current_asset_1: "current asset one",

      //                     current_asset_2: "current asset two",

      //                     current_asset_3: "current asset three",
      //                   },
      //                 ],
      //               },
      //             ],
      //             fixed_assets: [
      //               {
      //                 fixed_asset_sub_categories: [
      //                   {
      //                     fixed_asset_1: "fixed asset one",

      //                     fixed_asset_2: "fixed asset two",

      //                     fixed_asset_3: "fixed asset three",
      //                   },
      //                 ],
      //               },
      //             ],
      //           },
      //           // {
      //           //   fixedAsset: [
      //           //     {
      //           //       subCategories: [
      //           //         {
      //           //           fixedAsset1: "fixed asset one",
      //           //         },
      //           //         {
      //           //           fixedAsset2: "fixed asset two",
      //           //         },
      //           //         {
      //           //           fixedAsset3: "fixed asset three",
      //           //         },
      //           //       ],
      //           //     },
      //           //   ],
      //           // },
      //         ],
      //       },
      //     ],
      //     liabilities: [
      //       {
      //         liability_sub_types: [
      //           {
      //             current_liabilities: [
      //               {
      //                 current_liability_sub_categories: [
      //                   {
      //                     current_liabilities_1: "current Liabilities one",
      //                   },
      //                   {
      //                     current_liabilities_2: "current Liabilities two",
      //                   },
      //                   {
      //                     current_liabilities_3: "current Liabilities three",
      //                   },
      //                 ],
      //               },
      //             ],
      //           },
      //           {
      //             non_current_liabilities: [
      //               {
      //                 non_current_liabilityt_sub_categories: [
      //                   {
      //                     nonCurrentLiabilities1: "nonCurrent Liabilities one",
      //                   },
      //                   {
      //                     nonCurrentLiabilities2: "nonCurrent Liabilities two",
      //                   },
      //                   {
      //                     nonCurrentLiabilities3: "nonCurrent Liabilitiesthree",
      //                   },
      //                 ],
      //               },
      //             ],
      //             contingent_liabilities: [
      //               {
      //                 contingent_liabilitiy_sub_categories: [
      //                   {
      //                     contingent_liabilitiy_1: "fixed asset one",
      //                   },
      //                   {
      //                     contingent_liabilitiy_2: "fixed asset two",
      //                   },
      //                   {
      //                     contingent_liabilitiy_3: "fixed asset three",
      //                   },
      //                 ],
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //     equity: [],
      //     revenue: [],
      //     expenses: [],
      //   },
      // ],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};

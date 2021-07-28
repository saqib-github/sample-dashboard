import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
export default {
  namespaced: true,
  state() {
    return {
      types:['assets', "liability", 'equity', "revenue", "expenses"],
      data: [
        {
          id: "1",
          type: "assets",
          sub_type: "fixed Asset",
          sub_category: "fixed asset sub category",
          head_accounts: [
            {
              account_code: "123",
              account_name: "SMC ltd",
              credit: 500,
              debit: 400,
            },
            {
              account_code: "124",
              account_name: "sdc ltd",
              credit: 45646,
              debit: 76786,
            },
            {
              account_code: "6546",
              account_name: "hjtr ltd",
              credit: 7876,
              debit: 65756,
            },
          ],
        },
        {
          id: "6",
          type: "assets",
          sub_type: "current Asset",
          sub_category: "current asset sub category",
          head_accounts: [
            {
              account_code: "564",
              account_name: "ghh ltd",
              credit: 546546,
              debit: 54645,
            },
            {
              account_code: "6755",
              account_name: "hgg ltd",
              credit: 67567567,
              debit: 4564,
            },
            {
              account_code: "6456",
              account_name: "hng ltd",
              credit: 6456,
              debit: 6546,
            },
          ],
        },
        {
          id: "2",
          type: "liability",
          sub_type: "liability subtype",
          sub_category: "liability sub category",
          head_accounts: [
            {
              account_code: "46546",
              account_name: "gfbnf ltd",
              credit: 564,
              debit: 464,
            },
            {
              account_code: "64",
              account_name: "hgn ltd",
              credit: 75677,
              debit: 456,
            },
            {
              account_code: "4564",
              account_name: "nbg  ltd",
              credit: 46546,
              debit: 54654,
            },
          ],
        },
        {
          id: "3",
          type: "equity",
          sub_type: "equity subtype",
          sub_category: "equity sub category",
          head_accounts: [
            {
              account_code: "7567",
              account_name: "hgh ltd",
              credit: 5676,
              debit: 6557,
            },
            {
              account_code: "566",
              account_name: "hg ltd",
              credit: 6756,
              debit: 6575,
            },
            {
              account_code: "5675",
              account_name: "hgjngh ltd",
              credit: 65756,
              debit: 56756,
            },
          ],
        },
        {
          id: "4",
          type: "revenue",
          sub_type: "revenue subtype",
          sub_category: "revenue sub category",
          head_accounts: [
            {
              account_code: "546546",
              account_name: "ghn ltd",
              credit: 54645,
              debit: 4564,
            },
            {
              account_code: "464",
              account_name: "mjhgmn ltd",
              credit: 6456,
              debit: 456,
            },
            {
              account_code: "56546456",
              account_name: "ghf ltd",
              credit: 564,
              debit: 456,
            },
          ],
        },
        {
          id: "5",
          type: "expenses",
          sub_type: "expences subtype",
          sub_category: "expences sub category",
          head_accounts: [
            {
              account_code: "5464575",
              account_name: "ngrt ltd",
              credit: 6456,
              debit: 6456,
            },
            {
              account_code: "464564",
              account_name: "rete ltd",
              credit: 6546,
              debit: 464,
            },
            {
              account_code: "34543",
              account_name: "terter ltd",
              credit: 5345,
              debit: 53453,
            },
          ],
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

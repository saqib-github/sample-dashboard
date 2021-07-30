<template>
  <div>
    <h2>Voucher Entery Form</h2>
    <v-text-field v-model="searchValue"></v-text-field>

    <v-data-table
      dense
      :headers="headers"
      :items="all_accounts"
      item-key="name"
      :search="searchValue"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.account_code }}</td>
          <td>{{ row.item.account_name }}</td>
          <td><v-btn @click="filteredAccounts(5)">edit</v-btn></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "VoucherEnteryForm",

  data() {
    return {
      all_accounts: this.$store.getters["chartofaccounts/getAllAccounts"],
      code: null,
      searchValue: "",
      desserts: [
        {
          account_code: 75356334,
          account_name: "htrhnbrtn",
        },
        {
          account_code: 54654,
          account_name: "juikyu",
        },
        {
          account_code: 5234,
          account_name: "regrebh",
        },
        {
          account_code: 45634563,
          account_name: "yjumghm",
        },
        {
          account_code: 24235,
          account_name: "kyu,m ",
        },
        {
          account_code: 23535,
          account_name: ",mymn",
        },
        {
          account_code: 252,
          account_name: "kuiyum",
        },
        {
          account_code: 523542,
          account_name: "yutyumn",
        },
        {
          account_code: 242,
          account_name: "dsafcds",
        },
        {
          account_code: 34647,
          account_name: "kyjumk",
        },
        {
          account_code: 3256,
          account_name: "fmghngf",
        },
        {
          account_code: 23525,
          account_name: "tfbdfv"
        },
        {
          account_code: 2425,
          account_name: "dffdb",
        }
      ],
      headers: [
        {
          text: "Account Code",
          align: "start",
          sortable: false,
          value: "account_code",
        },
        { text: "Account Name", value: "account_name" },
        { text: "Edit Options" },
      ],
    };
  },
  methods: {
    filteredAccounts(n) {
      for (let i = n; i > 0; i--) {
        n *= i;
      }
      console.log("all -accounts", this.all_accounts);
      return n;
    },
  },
};
</script>

<style lang="scss" scoped></style>

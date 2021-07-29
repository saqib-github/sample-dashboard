<template>
  <div>
    <h2>Voucher Entery Form</h2>

    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.account_code }}</td>
          <td>{{ row.item.account_name }}</td>
          <td><v-btn>edit</v-btn></td>
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
      desserts: [
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
        {
          account_code: 75356334,
          account_name: "fd bdewcf",
        },
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
};
</script>

<style lang="scss" scoped></style>

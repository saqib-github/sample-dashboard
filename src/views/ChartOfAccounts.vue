<template>
  <v-container>
    <h2>Chart of Account Settings</h2>
    <v-container>
      <v-layout row wrap>
        <v-flex md3 xm12 class="mr-3">
          <h4>Type</h4>
          <v-select
            class="mt-1"
            :items="type"
            :label="selectLabel"
            dense
            v-model="accounttype"
            outlined
            @change="check"
          ></v-select>
        </v-flex>
        <v-flex md3 xm12>
          <h4>Sub Type</h4>
          <v-select
            class="mt-1"
            :items="subType"
            :label="selectLabel"
            dense
            outlined
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      type: ["Asset", "Liability", "Renenue", "Expense"],
      subType: ["Fixed Assets", "Current Assets"],
      accounttype: "",
      selectedLabel: "Type Selected",
      selectLabel: "Select Type",
    };
  },
  methods: {
    check() {
      console.log(this.accounttype);
      this.selectLabel = this.selectedLabel;
    },
  },
};
</script>

<style lang="scss" scoped></style>

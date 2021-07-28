<template>
  <v-container>
    <!-- chart of account  -->
    <h2>Chart of Accounts</h2>
    <v-container>
      <v-layout row wrap justify-space-between>
        <v-flex md3 xm12>
          <h4>Type</h4>
          <v-select
            class="mt-1"
            :items="types"
            :label="typeSelectLabel"
            dense
            v-model.trim="type"
            outlined
            @change="changeType"
          ></v-select>
        </v-flex>
        <v-flex md2 xm12>
          <h4>Sub Type</h4>
          <v-select
            class="mt-1"
            :items="subTypes"
            :label="subTypeSelectLabel"
            v-model.trim="subType"
            dense
            outlined
            @change="changeSubType"
          ></v-select>
        </v-flex>
        <v-flex md2 xm12>
          <h4>Sub Category</h4>
          <v-select
            class="mt-1"
            :items="subCategories"
            :label="subCategorySelectLabel"
            v-model.trim="subCategory"
            dense
            outlined
          ></v-select>
        </v-flex>
        <v-flex md2 xm12 class="pt-8">
          <v-btn outlined>Start Filtering</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- chart of account -->

    <!-- searchbar and Add button -->
    <v-container>
      <v-layout row wrap justify-space-between class="mt-10">
        <v-flex xs7 md3>
          <v-text-field
            label="Search"
            flat
            solo
            v-model.trim="searchValue"
            :prepend-inner-icon="mdiMagnify"
            background-color="white"
            @blur="filterBySearch"
          ></v-text-field
        ></v-flex>
        <v-flex xs5 md1 class="pl-9">
          <v-row justify="center">
            <!-- dialog box code  -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  x-large
                  class="ml-2 mt-3"
                  v-bind="attrs"
                  v-on="on"
                  :ripple="false"
                  color="pink"
                  id="no-background-hover"
                >
                  <v-avatar color="white" class="rounded-lg" size="50" tile>
                    <span class="white--text text-h5"
                      ><v-icon color="blue">{{ mdiPlus }}</v-icon></span
                    >
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Add New</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="4">
                        <v-select
                          class="mt-1"
                          :items="addTypes"
                          :label="typeSelectLabel"
                          v-model.trim="add_type"
                          dense
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          label="Sub Type*"
                          required
                          solo
                          v-model.trim="add_sub_type"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          label="Sub Category*"
                          required
                          solo
                          v-model.trim="add_sub_category"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <p v-if="invalid" class="red--text">
                      Please Select type and enter both values
                    </p>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="addData">
                    Add
                  </v-btn>
                </v-card-actions>
              </v-card>
              <!-- dialog box code  -->
            </v-dialog>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- searchbar and Add button -->

    <v-container>
      <h2>{{ type }} head of accounts</h2>
    </v-container>
    <!-- data headers -->
    <v-container>
      <v-layout row wrap class="white rounded-lg" justify-space-between>
        <v-flex xm12 md2 class="pl-4 pt-3">
          <v-lazy height="35"><h4>Account Code</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md2 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Account Name</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md2 class=" pt-3">
          <v-lazy height="35"> <h4>Edit Options</h4></v-lazy>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- data headers -->

    <!-- account data component -->
    <all-accounts
      v-for="data in filteredAccounts"
      :key="data.id"
      :head_accounts="data.head_accounts"
      :search_value="searchValue"
    >
    </all-accounts>
    <!-- <v-layout
        row
        wrap
        class="white rounded-lg"
        v-for="data in all_data[1].head_accounts"
        :key="data.account_code"
      >
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"
            ><p>{{ data.account_code }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ data.account_name }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ data.credit }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ data.debit }}</p></v-lazy
          >
        </v-flex>
      </v-layout> -->
    <!-- main data -->
  </v-container>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import AllAccounts from "../components/AllAccounts.vue";
export default {
  components: { AllAccounts },
  data() {
    return {
      mdiPlus: mdiPlus,
      mdiMagnify: mdiMagnify,
      subTypes: [],
      subCategories: [],
      // v-models for adding values to array
      addTypes: ["assets", "liability", "equity", "revenue", "expenses"],
      add_type: "",
      add_sub_type: "",
      add_sub_category: "",
      // v-models for adding values to array
      dialog: false,
      all_data: this.$store.getters["chartofaccounts/getData"],
      // select v-model values
      type: "",
      subType: "",
      subCategory: "",
      // select v-model values
      invalid: false,
      // search value v-model
      searchValue: "",
      typeSelectedLabel: "Type Selected",
      typeSelectLabel: "Select Type",
      subTypeSelectedLabel: "Sub Type Selected",
      subTypeSelectLabel: "Select Sub Type",
      subCategorySelectedLabel: "Sub Category Selected",
      subCategorySelectLabel: "Select Sub Category",
    };
  },
  methods: {
    // changeSubCategory() {
    //   this.subCategorySelectLabel = this.subCategorySelectedLabel;
    // },
    changeType() {
      console.log(this.type);
      let subtypes = [];
      if (this.type != null) {
        this.all_data.filter((data) => {
          if (data.type.includes(this.type)) {
            subtypes.push(data.sub_type);
          }
        });
        console.log("subtypes", subtypes);
        this.subTypes = subtypes;
        this.subType = "";
        this.subCategory = "";
        return subtypes;
      }
      // if (this.type.toLowerCase() === "liability".toLowerCase()) {
      //   this.all_data.filter((data) => {
      //     if (data.type.includes("liability")) {
      //       subtypes.push(data.sub_type);
      //     }
      //   });
      //   console.log("subtypes", subtypes);
      //   this.subTypes = subtypes;
      //   return subtypes;
      // }
      // if (this.type.toLowerCase() === "equity".toLowerCase()) {
      //   this.all_data.filter((data) => {
      //     if (data.type.includes("equity")) {
      //       subtypes.push(data.sub_type);
      //     }
      //   });
      //   console.log("subtypes", subtypes);
      //   this.subTypes = subtypes;
      //   return subtypes;
      // }
      // if (this.type.toLowerCase() === "revenue".toLowerCase()) {
      //   this.all_data.filter((data) => {
      //     if (data.type.includes("revenue")) {
      //       subtypes.push(data.sub_type);
      //     }
      //   });
      //   console.log("subtypes", subtypes);
      //   this.subTypes = subtypes;
      //   return subtypes;
      // }
      // if (this.type.toLowerCase() === "expences".toLowerCase()) {
      //   this.all_data.filter((data) => {
      //     if (data.type.includes("expences")) {
      //       subtypes.push(data.sub_type);
      //     }
      //   });
      //   console.log("subtypes", subtypes);
      //   this.subTypes = subtypes;
      //   return subtypes;
      // }
    },
    changeSubType() {
      let subCategories = [];

      if (this.subType != null) {
        console.log("subCategories", subCategories);
        this.all_data.filter((data) => {
          if (data.sub_type.includes(this.subType)) {
            subCategories.push(data.sub_category);
          }
        });
        console.log("sub categories", subCategories);
        this.subCategories = subCategories;
        return subCategories;
      }
    },

    addData() {
      console.log(
        this.add_type + " " + this.add_sub_type + " " + this.add_sub_category
      );
      if (this.add_type && this.add_sub_type && this.add_sub_category) {
        const newData = {
          id: this.all_data.length + 1,
          type: this.add_type,
          sub_type: this.add_sub_type,
          sub_category: this.add_sub_category,
          head_accounts: [],
        };
        console.log("dispatch new data", newData);
        this.$store.dispatch("chartofaccounts/addData", newData);
      } else {
        this.invalid = true;
      }
    },
    filterBySearch() {
      console.log("this filtered accounts", this.filteredAccounts);
    },
  },
  computed: {
    types() {
      const types = [];
      // let data = this.$store.getters["chartofaccounts/getData"];
      console.log("all data", this.all_data);
      console.log("account data", this.all_data[0].id);
      // console.log("head accounts", data[0].head_accounts);
      for (let i = 0; i < this.all_data.length; i++) {
        types.push(this.all_data[i].type);
      }
      console.log(types);
      return types;
    },
    filteredAccounts() {
      return this.all_data.filter((head) => {
        // if (head.type.includes(this.type)) {
        //   console.log("this is type", this.type);
        //   return true;
        // }
        if (
          head.sub_type.includes(this.subType) &&
          head.type.includes(this.type)
        ) {
          return true;
        }
        if (
          head.sub_type.includes(this.subType) &&
          head.type.includes(this.type) &&
          head.sub_category.includes(this.subCategory)
        ) {
          return true;
        }
        return false;
      });
    },
    // headAccounts() {
    //   const headOfAccounts = [];
    //   let data = this.$store.getters["chartofaccounts/getData"];
    //   for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data[i].head_accounts.length; j++) {
    //       headOfAccounts.push(data[i].head_accounts[j]);
    //     }
    //   }
    //   console.log("head of accounts", headOfAccounts);
    //   console.log("type", this.type);
    //   return headOfAccounts;
    // },
  },
};
</script>

<style lang="scss" scoped></style>

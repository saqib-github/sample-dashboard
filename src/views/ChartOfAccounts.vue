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
            :prepend-inner-icon="mdiMagnify"
            background-color="white"
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
                          :items="types"
                          :label="typeSelectLabel"
                          dense
                          v-model.trim="type"
                          outlined
                          @change="changeType"
                        ></v-select>
                      </v-col>
                      <v-col cols="4">
                        <v-select
                          class="mt-1"
                          :items="subTypes"
                          :label="subTypeSelectLabel"
                          v-model.trim="subType"
                          dense
                          outlined
                          @change="changeSubType"
                        ></v-select>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          label="Name of Sub Category*"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text> Add </v-btn>
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
      <h2>Head of Accounts</h2>
    </v-container>
    <!-- data headers -->
    <v-container>
      <v-layout row wrap class="white rounded-lg">
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"><h4>Account Code</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Account Name</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Credit</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Debit</h4></v-lazy>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- data headers -->

    <!-- main data -->
    <v-container>
      <v-layout
        row
        wrap
        class="white rounded-lg"
        v-for="head in headOfAccounts"
        :key="head.AccountCode"
      >
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35"
            ><p>{{ head.AccountCode }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ head.AccountName }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ head.credit }}</p></v-lazy
          >
        </v-flex>
        <v-flex xm12 md3 class="pl-4 pt-3">
          <v-lazy height="35">
            <p>{{ head.debit }}</p></v-lazy
          >
        </v-flex>
      </v-layout>
    </v-container>
    <!-- main data -->
  </v-container>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
export default {
  data() {
    return {
      mdiPlus: mdiPlus,
      mdiMagnify: mdiMagnify,
      subTypes: [],
      subCategories: [],
      headOfAccounts: [
        {
          AccountCode: "947937",
          AccountName: "ghh Ltd",
          credit: 100,
          debit: 50,
        },
        {
          AccountCode: "6546456",
          AccountName: "dfhfh Ltd",
          credit: 87,
          debit: 50,
        },
        {
          AccountCode: "565",
          AccountName: "dfh Ltd",
          credit: 100,
          debit: 50,
        },
        {
          AccountCode: "546654",
          AccountName: "hrt Ltd",
          credit: 1040,
          debit: 5560,
        },
      ],
      dialog: false,
      all_data: this.$store.getters["chartofaccounts/getData"],
      type: "",
      subType: "",
      subCategory: "",
      typeSelectedLabel: "Type Selected",
      typeSelectLabel: "Select Type",
      subTypeSelectedLabel: "Sub Type Selected",
      subTypeSelectLabel: "Select Sub Type",
      subCategorySelectedLabel: "Sub Category Selected",
      subCategorySelectLabel: "Select Sub Category",
    };
  },
  methods: {
    changeSubCategory() {
      this.subCategorySelectLabel = this.subCategorySelectedLabel;
    },
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
  },
  computed: {
    types() {
      const types = [];
      let data = this.$store.getters["chartofaccounts/getData"];
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        types.push(data[i].type);
      }
      console.log(types);
      return types;
    },
  },
};
</script>

<style lang="scss" scoped></style>

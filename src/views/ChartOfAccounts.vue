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
          <!-- add new account button  -->
          <v-dialog v-model="add_account_dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                depressed
                v-bind="attrs"
                v-on="on"
                :ripple="false"
              >
                Add Account
              </v-btn>
            </template>
            <v-card height="300px">
              <v-card-title>
                <span class="text-h5 black--text">Adding New Account </span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-text-field
                    outlined
                    solo
                    v-model.trim="new_account_name"
                    dense
                    placeholder="Enter Accout Name"
                  ></v-text-field>
                  <v-btn outlined solo dense @click="addNewAccount"
                    >Submit</v-btn
                  >
                  <!-- <v-text-field outlined solo dense placeholder="Enter Accout Code"></v-text-field> -->
                  <div>
                    <span class="text-h5 black--text">Initial Credit: 0 </span>
                    <span class="text-h5 black--text">Initial Debit: 0 </span>
                  </div>

                  <!-- here are add account front-end code dialog -->
                </v-container>
                <!-- <small>*indicates required field</small> -->
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  @click="add_account_dialog = false"
                >
                  Close
                </v-btn>
                <!-- <v-btn color="blue darken-1"> Add </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- add new account button  -->
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-if="!types && !subCategories && !subTypes || !all_data"
      >loading...</v-container
    >
    <!-- chart of account -->

    <!-- searchbar and Add button -->
    <v-container>
      <v-layout row wrap justify-space-between class="mt-10">
        <v-flex xs7 md3>
          <v-text-field
            label="Search By Code"
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
      <!-- <v-layout row wrap class="white rounded-lg" justify-space-between>
        <v-flex xm12 md2 class="pl-4 pt-3">
          <v-lazy height="35"><h4>Account Code</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md2 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Account Name</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md2 class="pt-3">
          <v-lazy height="35"> <h4>Edit Options</h4></v-lazy>
        </v-flex>
      </v-layout> -->
    </v-container>
    <!-- data headers -->

    <!-- account data component -->
    <!-- <all-accounts
      v-for="data in filteredAccounts"
      :key="data.id"
      :head_accounts="data.head_accounts"
      :search_value="searchValue"
    >
    </all-accounts> -->
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
    <v-data-table
      v-if="headAccounts"
      dense
      :headers="headers"
      :items="headAccounts"
      item-key="headAccounts.account_code"
      class="elevation-1"
      :search="searchValue"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.account_code }}</td>
          <td>{{ row.item.account_name }}</td>
          <td>
            <v-menu top :offset-y="offset">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>{{ mdiDotsVertical }}</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-btn
                    depressed
                    text
                    small
                    color="red"
                    :ripple="false"
                    @click="deleteAccount(row.item.account_code)"
                    >delete</v-btn
                  > </v-list-item
                ><v-list-item>
                  <!-- view account dialog box -->
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        small
                        text
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        :ripple="false"
                        @click="viewAccount(row.item.account_code)"
                      >
                        view account
                      </v-btn>
                    </template>
                    <v-card height="400px">
                      <v-card-title>
                        <span class="text-h5"
                          >Account Name: {{ account_name }}
                        </span>
                        <span class="text-h5">(Code: {{ account_code }})</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <p class="black--text">
                                Opening Date: 02/03/2016
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6"
                              ><span class="text-h6 black--text"
                                >Credit: {{ account_credit }}</span
                              ></v-col
                            >
                            <v-col cols="6"
                              ><span class="text-h6 black--text"
                                >Debit: {{ account_debit }}</span
                              ></v-col
                            >
                          </v-row>
                          <v-row>
                            <v-col cols="12">
                              <span class="text-h5 black--text"
                                >Total Balance:
                                {{ account_total_balance }}</span
                              >
                            </v-col>
                          </v-row>
                        </v-container>
                        <!-- <small>*indicates required field</small> -->
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" @click="dialog = false">
                          Close
                        </v-btn>
                        <!-- <v-btn color="blue darken-1"> Add </v-btn> -->
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <!-- view account dialog box -->
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiDotsVertical } from "@mdi/js";
// import AllAccounts from "../components/AllAccounts.vue";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  // components: { AllAccounts },
  data() {
    return {
      mdiDotsVertical: mdiDotsVertical,
      // for view data
      account_code: "",
      account_name: "",
      opening_date: "",
      account_credit: "",
      account_debit: "",
      account_total_balance: "",
      // for view data
      // v-model for new account text field
      new_account_name: "",
      offset: true,
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
      // debvewjcvwec
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
      add_account_dialog: false,
      all_data: this.$store.getters["chartofaccounts/getData"],
      // select v-model values
      // getting all accounts
      all_accounts: this.$store.getters["chartofaccounts/getAllAccounts"],
      // getting all accounts
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
      timer: "",
    };
  },
  mounted() {
    this.$store.dispatch("chartofaccounts/getAllData");
    // this.all_data = this.$store.getters["chartofaccounts/getData"];
    this.timer = setInterval(
      this.$store.dispatch("chartofaccounts/getAllData"),
      3000
    );
  },

  methods: {
    getAllData() {
      this.$store.dispatch("chartofaccounts/getAllData");
    },
    addNewAccount() {
      let id;
      if (
        !this.type ||
        !this.subType ||
        (!this.subCategory && this.new_account_name)
      ) {
        Swal.fire("error", "Please Select First", "error");
      }
      // if (!this.new_account_name) {
      //   Swal.fire("error", "Please Enter Name", "error");
      // }
      if (
        this.type &&
        this.subType &&
        this.subCategory &&
        !this.new_account_name
      ) {
        Swal.fire("error", "Please Enter Name", "error");
      }
      if (
        this.type &&
        this.subType &&
        this.subCategory &&
        this.new_account_name
      ) {
        for (let i = 0; i < this.all_data.length; i++) {
          if (
            this.all_data[i].type === this.type &&
            this.all_data[i].sub_type === this.subType &&
            this.all_data[i].sub_category === this.subCategory
          ) {
            id = this.all_data[i]._id;
          }
        }

        console.log("id is", id);
        const newAccount = {
          account_code: 1801,
          account_name: this.new_account_name,
          credit: 0,
          debit: 0,
        };
        axios
          .put("http://localhost:3000/chartofaccounts/" + id, newAccount)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        Swal.fire("Saved!", "", "success");
        this.add_account_dialog = false;
      }
    },
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
        this.subCategory = "";
        return subCategories;
      }
    },
    checkSweetAlert() {
      Swal.fire("hello", "bhjevjesdv ", "success");
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
        this.dialog = false;
        Swal.fire("Saved!", "", "success");
      } else {
        this.invalid = true;
        Swal.fire({
          icon: "error",
          title: "opps",
          text: "something went wrong",
        });
      }
    },
    filterBySearch() {
      console.log("this filtered accounts", this.filteredAccounts);
    },
    viewAccount(view_account_code) {
      console.log("view account code", view_account_code);
      console.log("headAccounts", this.headAccounts);
      for (let i = 0; i < this.headAccounts.length; i++) {
        if (view_account_code === this.headAccounts[i].account_code) {
          this.account_code = this.headAccounts[i].account_code;
          this.account_name = this.headAccounts[i].account_name;
          this.account_credit = this.headAccounts[i].credit;
          this.account_debit = this.headAccounts[i].debit;
          this.account_total_balance =
            this.headAccounts[i].credit + this.headAccounts[i].debit;
        }
      }
    },
    deleteAccount(delete_account_code) {
      console.log("delete account code", delete_account_code);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          for (let i = 0; i < this.headAccounts.length; i++) {
            if (delete_account_code === this.headAccounts[i].account_code) {
              this.headAccounts.splice(i, 1);
            }
          }
          console.log("after delete account", this.headAccounts);
        }
      });
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
    headAccounts() {
      const headOfAccounts = [];
      let data = this.all_data;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].head_accounts.length; j++) {
          if (
            this.type.includes(data[i].type) &&
            !this.subType &&
            !this.subCategory
          ) {
            headOfAccounts.push(data[i].head_accounts[j]);
          }
          if (
            this.type.includes(data[i].type) &&
            this.subType.includes(data[i].sub_type) &&
            !this.subCategory
          ) {
            headOfAccounts.push(data[i].head_accounts[j]);
          }
          if (
            this.type.includes(data[i].type) &&
            this.subType.includes(data[i].sub_type) &&
            this.subCategory.includes(data[i].sub_category)
          ) {
            headOfAccounts.push(data[i].head_accounts[j]);
          }
          if (!this.type && !this.subType && !this.subCategory) {
            headOfAccounts.push(data[i].head_accounts[j]);
          }
        }
      }
      console.log("head of accounts", headOfAccounts);
      console.log("type", this.type);
      return headOfAccounts;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-container>
    <v-layout
      row
      wrap
      justify-space-between
      class="white rounded-lg"
      v-for="data in filteredBySearch"
      :key="data.account_code"
    >
      <v-flex xm12 md2 class="pl-4 pt-3">
        <v-lazy height="35"
          ><p>{{ data.account_code }}</p>
        </v-lazy>
      </v-flex>
      <v-flex xm12 md2 class="pl-4 pt-3">
        <v-lazy height="35">
          <p>{{ data.account_name }}</p></v-lazy
        >
      </v-flex>
      <!-- <v-flex xm12 md2 class="pl-4 pt-3">
        <v-lazy height="35">
          <p>{{ data.credit }}</p></v-lazy
        >
      </v-flex>
      <v-flex xm12 md2 class="pl-4 pt-3">
        <v-lazy height="35">
          <p>{{ data.debit }}</p></v-lazy
        >
      </v-flex> -->
      <v-flex xm12 md2 class="mt-2" align-self-end>
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
                @click="deleteAccount(data.account_code)"
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
                    @click="viewAccount(data.account_code)"
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
                          <p class="black--text">Opening Date: 02/03/2016</p>
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
                            >Total Balance: {{ account_total_balance }}</span
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
        <!-- <v-btn icon>
            <v-icon>{{ mdiDotsVertical }}</v-icon>
          </v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mdiDotsVertical } from "@mdi/js";
import Swal from "sweetalert2";
export default {
  name: "all-accounts",
  props: ["head_accounts", "search_value"],

  data() {
    return {
      // dncjnvndfev
      mdiDotsVertical: mdiDotsVertical,
      offset: true,
      dialog: false,
      filtered_accounts: this.head_accounts,
      // for view data
      account_code: "",
      account_name: "",
      opening_date: "",
      account_credit: "",
      account_debit: "",
      account_total_balance: "",
      // for view data
    };
  },
  methods: {
    viewAccount(view_account_code) {
      console.log("view account code", view_account_code);
      for (let i = 0; i < this.filtered_accounts.length; i++) {
        if (view_account_code === this.filtered_accounts[i].account_code) {
          this.account_code = this.filtered_accounts[i].account_code;
          this.account_name = this.filtered_accounts[i].account_name;
          this.account_credit = this.filtered_accounts[i].credit;
          this.account_debit = this.filtered_accounts[i].debit;
          this.account_total_balance =
            this.filtered_accounts[i].credit + this.filtered_accounts[i].debit;
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
          for (let i = 0; i < this.filtered_accounts.length; i++) {
            if (
              delete_account_code === this.filtered_accounts[i].account_code
            ) {
              this.filtered_accounts.splice(i, 1);
            }
          }
        }
      });
    },
  },
  computed: {
    filteredBySearch() {
      // let filtered_accounts = this.head_accounts;
      console.log(this.search_value);
      return this.filtered_accounts.filter((data) =>
        data.account_code.match(this.search_value)
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

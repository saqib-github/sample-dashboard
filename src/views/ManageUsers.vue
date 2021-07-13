<template>
  <v-container class="my-5">
    <!-- manage orders layout -->
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6><h2>Manage Users</h2></v-flex>
      </v-layout>
    </v-container>
    <!-- manage orders layout -->

    <!-- search bar and add button layout -->
    <v-container>
      <v-layout row wrap justify-space-between class="mt-10">
        <v-flex xs7 md3>
          <v-text-field
            label="Search"
            v-model.trim="searchValue"
            flat
            solo
            @change="newFilteredUsers"
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
                  <span class="text-h5">Add New User</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Name*"
                          required
                          v-model="name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <p v-if="!formIsValid" class="red--text">
                      Please enter both name and email correctly.
                    </p>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="addUser">
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
    <!-- search bar and add button layout -->

    <!-- snackbar. -->
    <v-snackbar v-model="snackbar">
      {{ snackBarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- snackbar. -->

    <!-- Data Header layout -->
    <v-container>
      <v-layout row wrap class="white rounded-lg">
        <v-flex xm12 md6 class="pl-4 pt-3">
          <v-lazy height="35"><h4>Name</h4></v-lazy>
        </v-flex>
        <v-flex xm12 md6 class="pl-4 pt-3">
          <v-lazy height="35"> <h4>Email</h4></v-lazy>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- Data Header layout -->

    <!-- main data layout -->
    <v-container class="mt-1">
      <v-layout
        row
        wrap
        class="white rounded-lg"
        justify-space-between
        v-for="user in newFilteredUsers"
        :key="user.id"
      >
        <v-flex xm12 md6>
          <span>
            <v-btn icon x-large>
              <v-avatar color="#EA8E6F" class="rounded-lg" size="42">
                <span class="white--text text-h5">{{
                  user.name[0] + user.name[1]
                }}</span>
              </v-avatar>
            </v-btn>
            {{ user.name }} id: {{ user.id }}
          </span>
        </v-flex>
        <v-flex xm12 md5 class="mt-4">
          <p>{{ user.email }}</p>
        </v-flex>
        <v-flex xm12 md1 class="mt-2">
          <v-menu top :offset-x="offset">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>{{ mdiDotsVertical }}</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title
                  ><v-btn
                    depressed
                    text
                    color="red"
                    @click="deleteUser(user.id)"
                    >delete</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-btn icon>
            <v-icon>{{ mdiDotsVertical }}</v-icon>
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-container>
    <!-- main data layout -->
  </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mdiPlus } from "@mdi/js";
import { mdiDotsVertical } from "@mdi/js";
export default {
  name: "ManageUsers",

  data() {
    return {
      mdiMagnify: mdiMagnify,
      mdiPlus: mdiPlus,
      mdiDotsVertical: mdiDotsVertical,
      offset: true,
      dialog: false,
      formIsValid: true,
      name: "",
      email: "",
      searchValue: "",
      snackBarText: "You have registered successfully a new user",
      snackbar: false,
      users: [
        { id: 1, name: "Moazzam Ali Boota", email: "iphone@render.so" },
        { id: 2, name: "Babar Ali", email: "babarali@gmail.com" },
        { id: 3, name: "Haider Ali Boota", email: "haider@gmail.com" },
        { id: 4, name: "Usama Hassan", email: "usama@yahoo.com" },
        { id: 5, name: "Hassan Ali", email: "hassan@yahoo.com" },
        { id: 6, name: "Abu Bakar", email: "abubakar@yahoo.com" },
        { id: 7, name: "Hello", email: "hello@yahoo.com" },
      ],
    };
  },
  methods: {
    deleteUser(index) {
      this.users.splice(
        this.users.findIndex((user) => user.id === index),
        1
      );
      // console.log(this.searchValue);
    },
    addUser() {
      if (this.name == "" || this.email == "" || !this.email.includes("@")) {
        this.formIsValid = false;
        return;
      }
      var id = this.users.length + 1;
      const newUser = {
        id: id,
        name: this.name,
        email: this.email,
      };
      this.users.push(newUser);
      this.dialog = false;
      this.snackbar = true;
    },
  },
  computed: {
    newFilteredUsers() {
      if (this.searchValue == "") {
        return this.users;
      }
      console.log(this.searchValue);
      let newUsers = this.users.filter((user) =>
        user.name.toUpperCase().match(this.searchValue.toUpperCase())
      );
      return newUsers;
    },
  },

  components: {},
};
</script>
<style scoped>
#no-background-hover::before {
  background-color: "blue";
}
</style>

<template>
  <v-container class="my-5">
    <!-- manage orders -->
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
            flat
            solo
            :prepend-inner-icon="mdiMagnify"
            background-color="white"
          ></v-text-field
        ></v-flex>
        <v-flex xs5 md1 class="pl-9">
          <v-btn icon x-large class="ml-2">
            <v-avatar color="white" class="rounded-lg" size="50" tile>
              <span class="white--text text-h5"
                ><v-icon color="blue">{{ mdiPlus }}</v-icon></span
              >
            </v-avatar>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- search bar and add button layout -->

    <!-- Data Header layout -->
    <v-container>
      <v-layout row wrap class="white rounded-lg">
        <v-flex xm12 md6 class="pl-4 align-stretch">
          <h4>Name</h4>
        </v-flex>
        <v-flex xm12 md6>
          <h4>Email</h4>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- Data Header layout -->

    <!-- main data layout -->
    <v-container>
      <v-layout row wrap class="white rounded-lg mt-3" justify-space-between>
        <v-flex xm12 md6>
          <span>
            <v-btn icon x-large>
              <v-avatar color="#EA8E6F" class="rounded-lg" size="42">
                <span class="white--text text-h5">MA</span>
              </v-avatar>
            </v-btn>
            {{ users[0].name }}
          </span>
        </v-flex>
        <v-flex xm12 md5 class="mt-2">
          <p>{{ users[0].email }}</p>
        </v-flex>
        <v-flex xm12 md1 class="mt-2">
          <v-btn icon>
            <v-icon>{{ mdiDotsVertical }}</v-icon>
          </v-btn>
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
      users: [{ name: "Moazzam Ali Boota", email: "iphone@render.so" }],
    };
  },

  components: {},
};
</script>
<style scoped></style>

<template>
  <v-container id="regular-tables" fluid tag="section">
    <h2>Manage Employees</h2>
    <base-v-component heading="Simple Tables" link="components/simple-tables" />

    <base-material-card
      icon="mdi-clipboard-text"
      title="Simple Table"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="success--text">Company Id</th>
            <th class="success--text">Name</th>
            <th class="success--text">Country</th>
            <th class="success--text">City</th>
            <th class="success--text">Salary</th>
            <th class="success--text">Options</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="">$36,738</td>
            <td class="">
              <v-btn icon color="blue">view</v-btn>
              <v-btn icon color="red" @click="deleteEmployee"
                ><v-icon>{{ mdiTrashCan }}</v-icon></v-btn
              >
              <v-btn icon color="green"
                ><v-icon>{{ mdiPencil }}</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
    </base-material-card>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { mdiTrashCan } from "@mdi/js";
import { mdiPencil } from "@mdi/js";
export default {
  data() {
    return {
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
    };
  },
  methods: {
    deleteEmployee() {
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
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

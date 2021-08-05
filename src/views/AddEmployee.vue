<template>
  <v-container id="user-profile" fluid tag="section">
    <h2>Add a New Employee</h2>
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Edit Profile</div>

            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field label="Name" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field class="purple-input" label="Father Name" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Email Address" class="purple-input" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="City" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Country" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="Phone Number" class="purple-input" />
                </v-col>

                <v-col cols="12" md="2">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Joining Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field label="Position" class="purple-input" />
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field label="Department" class="purple-input" />
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    type="number"
                    label="Starting Salary"
                    class="purple-input"
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    :items="status"
                    label="Status"
                    v-model.trim="employee_status"
                    @change="changeEmployeeStatus"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    :items="job_types"
                    label="Job Type"
                    v-model.trim="job_type"
                    @change="changeJobType"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4" v-if="contract_status">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Contract Signed Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" md="4" v-if="contract_status">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Contract Ending Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0"> Add </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    status: ["Permanent", "Temporary"],
    job_types: ["Internee", "Full Time Hiring", "Part Time Hiring"],
    employee_status: "",
    job_type: "",
    contract_status: false,
  }),

  methods: {
    changeEmployeeStatus() {
      if (this.employee_status === "Temporary") {
        this.contract_status = true;
      }
      if (this.employee_status === "Permanent") {
        this.contract_status = false;
      }
    },

    changeJobType() {
      if (
        this.employee_status === "Temporary" &&
        this.job_type === "Internee"
      ) {
        this.contract_status = true;
      }
      if(this.employee_status === "Permanent" && this.job_type === "Internee"){
              Swal.fire({
        title: "Are you sure?",
        text: "You want to hire internee as Permanent Employee!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

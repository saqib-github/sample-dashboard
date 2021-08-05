import Vue from "vue";
import VueRouter from "vue-router";
import ManageUsers from "../views/ManageUsers.vue";
import ManageComputers from "../views/ManageComputers.vue";
import AccountSettings from "../views/AccountSettings.vue";
import Subscriptions from "../views/Subscriptions.vue";
import Invoices from "../views/Invoices.vue";
import PaymentMethods from "../views/PaymentMethods.vue";
import EmployeeDetailsView from "../views/EmployeeDetailsView.vue";
import ManageEmployees from "../views/ManageEmployees.vue";
import AddEmployee from "../views/AddEmployee.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ManageUsers",
    component: ManageUsers,
  },
  {
    path: "/managecomputers",
    name: "ManageComputers",
    component: ManageComputers,
  },
  {
    path: "/accountsettings",
    name: "AccountSettings",
    component: AccountSettings,
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: Subscriptions,
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: Invoices,
  },
  {
    path: "/paymentmethods",
    name: "PaymentMethods",
    component: PaymentMethods,
  }, 
  {
    path: "/employeedetailsview",
    name: "EmployeedetailsView",
    component: EmployeeDetailsView,
  }, 
  {
    path: "/manageemployees",
    name: "ManageEmployees",
    component: ManageEmployees,
  },  
  {
    path: "/addemployee",
    name: "AddEmployee",
    component: AddEmployee,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;

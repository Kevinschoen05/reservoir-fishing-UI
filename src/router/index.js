import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddRecord from "../views/AddRecord.vue";
import ReservoirTrips from "../views/ReservoirTrips.vue";
import Anglers from "../views/Anglers.vue";
import FishGallery from "../views/FishGallery.vue";
import Trends from "../views/Trends.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-record",
    name: "add-record",
    component: AddRecord,
  },
  {
    path: "/anglers",
    name: "anglers-view",
    component: Anglers,
  },
  {
    path: "/fish-id",
    name: "fish-id",
    component: FishGallery,
  },
  {
    path: "/trends",
    name: "trends",
    component: Trends,
  },
  {
    path: "/:reservoir",
    name: "reservoir-trips",
    component: ReservoirTrips,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

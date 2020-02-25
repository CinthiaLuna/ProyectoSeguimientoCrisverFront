import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./views/Home";
import MenuPrincipal from "./views/MenuPrincipal";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import CalendarView from "nativescript-ui-calendar/vue";
import RadCartesianChart from "nativescript-ui-chart/vue";
Vue.use(RadCartesianChart);
Vue.use(CalendarView);
Vue.use(RadSideDrawer);

import store from "./store";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

new Vue({
  render(h) {
    return h(App, [
      h(MenuPrincipal, { slot: "drawerContent" }),
      h(Home, { slot: "mainContent" })
    ]);
  }
}).$start();

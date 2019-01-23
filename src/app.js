
import Vue from "vue"
import {router} from "@/routes"
import App from "./app.vue"

//buefy specifics
import "./assets/css/custom.min.css";
import "./assets/bulma/bulma.sass";
import Buefy from 'buefy'
Vue.use(Buefy)
//buefy specifics

new Vue ({
  el: "#app",
  router,
  render: h => h(App)
})

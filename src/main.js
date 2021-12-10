import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.mixin({
  methods:{
    show_confirm: function(obj) {
      obj.show = true;
      this.$store.commit("show_confirm_dialog", obj);
    },
    show_loading: function() {
      this.$store.commit("set_loading", true);
    },
    hide_loading: function() {
      this.$store.commit("set_loading", false);
    },
    show_alert(obj, type = "info") {
      if (typeof obj === "string") {
        obj = { title: obj, type: type };
      }
      this.$store.commit("show_alert_dialog", obj);
    }
  }
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

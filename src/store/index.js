import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading_count : 0,
    confirm_dialog: {
      show: false,
      message: ""
    },
    alert_dialog: {
      show: false,
      type: "info",
      title: "",
      message: "",
      cancel_botton: true,
      auto_disappear: 0
    },
    config_obj: {
      id: null,
      name: null,
      type: null
    },
  },
  getters:{
    loading: state => {
      return state.loading_count > 0;
    },
    confirm_dialog: state => {
      return state.confirm_dialog;
    },
    alert_dialog: state => {
      return state.alert_dialog;
    },
  },
  mutations: {
    set_loading(state, is_loading) {
      if (is_loading) {
        state.loading_count += 1;
      } else {
        if (state.loading_count > 0) {
          state.loading_count -= 1;
        }
      }
    },
    show_confirm_dialog(state, dialog) {
      state.confirm_dialog = dialog;
    },
    show_alert_dialog(state, dialog) {
      state.alert_dialog = Object.assign(
          {
            show: true,
            type: "info",
            title: "",
            message: "",
            cancel_botton: true,
            auto_disappear: 0
          },
          dialog
      );
    }
  },
  actions: {
  },
  modules: {
  }
})

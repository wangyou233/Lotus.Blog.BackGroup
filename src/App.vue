<template>
  <transition name="fade">
    <v-app>
      <router-view/>
      <alert-dialog :dialog="alert_dialog"></alert-dialog>
      <confirm-dialog :dialog="confirm_dialog"></confirm-dialog>
      <loading-dialog :loading="loading"></loading-dialog>
    </v-app>
  </transition>

</template>

<script>
import AlertDialog from "./components/AlertDialog";
import ConfirmDialog from "./components/ConfirmDialog";
import LoadingDialog from "./components/LoadingDialog";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components:{AlertDialog,ConfirmDialog,LoadingDialog},
  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(["loading", "confirm_dialog", "alert_dialog"])
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <v-dialog v-model="dialog.show" persistent width="500">
    <v-alert
        :value="dialog.show"
        :type="dialog.type"
        dismissible
        @input="input"
    >
      {{ dialog.title }}
    </v-alert>
  </v-dialog>
</template>

<script>
export default {
  name: "AlertDialog",
  watch:{
    dialog(obj) {
      let that = this;
      if (obj.type === "success" || obj.type === "info") {
        setTimeout(function() {
          that.dialog.show = false;
        }, 2000);
      }
    }
  },
  props:{
    dialog: Object

  },
  methods:{
    input(val) {
      this.dialog.show = val;
    }
  }
}
</script>

<style scoped>

</style>
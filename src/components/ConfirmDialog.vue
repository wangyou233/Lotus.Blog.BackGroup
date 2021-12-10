<template>
  <v-dialog
      v-model="dialog.show"
      max-width="500px"
      persistent
      transition="dialog-transition"
  >
    <v-card color="gray">
      <v-card-title primary-title>
        <h3>{{ dialog.message }}</h3>
      </v-card-title>
      <slot></slot>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="cancel">No</v-btn>
        <v-btn @click="confirm" color="primary">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    dialog: Object
  },
  methods: {
    cancel() {
      this.dialog.show = false;
      if (typeof this.dialog.cancel == "function") {
        this.dialog.cancel();
      }
    },
    confirm() {
      this.dialog.show = false;
      if (typeof this.dialog.confirm == "function") {
        this.dialog.confirm();
      }
    }
  }
}
</script>

<style scoped>

</style>
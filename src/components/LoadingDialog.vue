<template>
  <v-dialog v-model="loading"  width="200">
    <v-card color="primary" dark>
      <v-card-text>
        Loading...
        <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoadingDialog",
  props:{
    loading : Boolean
  }
}
</script>

<style scoped>

</style>
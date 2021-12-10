<template>
  <v-main>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md3>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    v-model="loginInput.userName"
                    prepend-icon="fa-user"
                    name="login"
                    label="Login"
                    type="text"
                ></v-text-field>
                <v-text-field
                    v-model="loginInput.passWord"
                    id="password"
                    prepend-icon="fa-lock"
                    name="password"
                    label="Password"
                    type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary"  width="100" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>

</template>

<script>
const api = require("../api/index")

export default {
  name: "Login",
  data(){
    return{
      loginInput:{
        userName:"",
        passWord:""
      }
    }
  },
  methods:{
    login(){
      let that = this;
      api.login(this.loginInput).then(res=>{
        api.setTokenHeader(res)
        window.localStorage.setItem("token",res)
        that.$router.push("/")
      });
    }
  }
}
</script>

<style scoped>

</style>
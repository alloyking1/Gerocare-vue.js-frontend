
<template>
  <div>
    <div>
      <form onsubmit="return false">
          <vs-input
              name="first name"
              icon-no-border
              icon="icon icon-user"
              icon-pack="feather"
              label-placeholder="Full Name"
              v-model="userDetails.first_name"
          class="w-full"/>

          <vs-input
              name="email"
              icon-no-border
              icon="icon icon-email"
              icon-pack="feather"
              label-placeholder="Email"
              v-model="userDetails.email"
          class="w-full"/>

        <vs-input
            type="password"
            name="password" 
            icon-no-border
            icon="icon icon-lock"
            icon-pack="feather"
            label-placeholder="Password"
            v-model="userDetails.password"
            class="w-full mt-6" />

        <div class="flex flex-wrap justify-between my-5">
            <vs-checkbox v-model="userDetails.checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
            <router-link to="">Forgot Password?</router-link>
        </div>
        <vs-button  type="border submit" @click="validate"> Register</vs-button>
        <vs-button class="float-right" to="/pages/register">>Login</vs-button>

        <vs-divider>OR</vs-divider>        
        <span class="text-danger text-sm">{{ error }}</span>

      </form>
    </div>
  </div>
</template>

<script>
import {createAccount} from '../../../api/register.api';

export default{
  data() {
    return {
      userDetails:{
        first_name: "",
        emal: "",
        password: "",
        patient_full_name: "",
        address: "",
        patient_phone_num: "",
        city: "",
        state: "",
        state: "",
        checkbox_remember_me: false,
      },
      error:""
    }
  },

  methods:{
    validate(){
      for (var key in this.userDetails) {   
          if(this.userDetails[key] === ""){
              this.error = key+' '+'fiel is required';
              return false;
          }
      }

      createAccount(this.userDetails)
      .then(res => {
        alert(res);
      })
      .catch(err => {
        alert(err);
      })
    }
  }
}
</script>

<style lang="scss">

</style>

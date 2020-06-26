
<template>
  <div
    class="h-screen flex w-full bg-img2 vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <div slot="no-body" class="">
        <div class="vx-row no-gutter justify-center items-center p-3">
          <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
            <div class="p-8 login-tabs-container">
              <div class="vx-card__title mb-4 text-center p-5">
                <div class="logo center">
                  <img src="@/assets/images/pages/login/gerocareLogo.svg" alt="Kiwi standing on oval">
                </div>
                <h4 class="mb-4 2xl p-2"><strong>Create Account</strong></h4>
                <p>Fill the forms below to complete the registration.</p>
                <!-- <vs-divider/> -->
              </div>
              

              <div>
                <ValidationObserver ref="forgotPassword">
                    <form @submit.prevent="validate">
                        <div class="mt-3">
                            <ValidationProvider  name="Email" rules="required" v-slot="{ errors }">
                                <vs-input name="Full Name" type="text" placeholder="Enter Full Name" v-model="data.name" class="w-full"/>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="mt-3">
                            <ValidationProvider  name="Email" rules="required" v-slot="{ errors }">
                                <vs-input name="email" type="email" placeholder="Enter Email" v-model="data.email" class="w-full"/>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="mt-3">
                            <ValidationProvider  name="Password" rules="required" v-slot="{ errors }">
                                <vs-input name="email" type="password" placeholder="Enter Password" v-model="data.password" class="w-full"/>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="mt-3">
                            <ValidationProvider  name="Password Confirm" rules="required" v-slot="{ errors }">
                                <vs-input name="email" type="password" placeholder="Confirm Password" v-model="data.password_confirmation" class="w-full"/>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="mt-3">
                            <ValidationProvider  name="Phone Number" rules="required" v-slot="{ errors }">
                                <vs-input name="email" type="number" placeholder="Enter Phone Number" v-model="data.phone_number" class="w-full"/>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="vx-col md:w-2/2 w-full mt-3">
                          <div class="ceter p-3">
                            <vs-checkbox color="success" v-model="check">I have read and agreed to the Terms of Usage & Data Policy</vs-checkbox>
                          </div>
                        </div>

                        <div class="p-5">
                            <div class="p-5">
                              <input class="float-right authBtnCustom pl-4 pr-4 p-3 submitBtn" type="submit" value="Register" />
                            <!-- <vs-button class="float-right authBtnCustom pl-4 pr-4" @click="validate">Continue</vs-button> -->
                            </div>
                            
                            <div class="pt-5">
                                <div class="text-center">
                                    <div class="p-3 pt-5">
                                      <vs-divider/>
                                    <p class="p-2">Login instead? <router-link to="/login">Login</router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  data () {
    return {
      data:{
        role:3,
        url:process.env.VUE_APP_MAIN_URL+`register/email/verify`
      },
      check:''
    }
  },

  methods:{
    async validate(){
        if(await this.$refs.forgotPassword.validate())
        this.request(this.data)
    },

    async request(data){
      if(this.check === true){
        try{
          this.$vs.loading()
          await this.$store.dispatch('registerSponsor', data)
          this.$vs.loading.close()
          this.$router.push({name:'page-login'})
          this.$vs.notify({title:'Registration Successful',text:'Check your email to verify email address',color:'warning',position:'top-right'})
          
        }catch(e){
            this.$vs.loading.close()
            this.$vs.notify({title:'Something is wrong', text:'You have entered an invalid email', color:'danger',position:'top-right'})
        }
      }else{
        this.$vs.notify({title:'Terms and condition', text:'You have to accept our terms and condition to use gerocare', color:'danger',position:'top-right'})
      }
      
    }
  },

  components:{
    ValidationProvider, 
    ValidationObserver,
  }
}
</script>

<style scoped>
.login-img{
  width: 50%;
  /* height: auto; */
}

.bg-img2{
    /* background-image: url("../../assets/images/pages/green_bg.jpg"); */
    /* background-color:linear-gradient(to bottom right, red, yellow); */
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

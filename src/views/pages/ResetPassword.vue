
<template>
    <div class="h-screen flex w-full bg-img2">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/reset_password.png" alt="login" class="mx-auto login-img">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Recover your password</h4>
                                    <p>Please reset your password here.</p>
                                </div>

                                <span class="text-danger text-sm">{{ error }}</span>
                                <vs-input type="email" label-placeholder="Email" v-model="email" class="w-full mb-8" />
                                <vs-input type="password" label-placeholder="password" v-model="password" class="w-full mb-8" />
                                <vs-input type="password" label-placeholder="Confirm your password" v-model="password_confirmation" class="w-full mb-8" />

                                <vs-button type="border" to="/pages/login" class="px-4 w-full md:w-auto">Back To Login</vs-button>
                                <vs-button class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" @click="recover">Recover Password</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import {passwordReset} from '../../api/auth.api'

export default {
  data () {
    return {
      email: '',
      password:'',
      password_confirmation:'',
      error:''
    }
  },

  methods:{
    recover(){
        if(this.email === "" || this.password === "" || this.password_confirmation === ""){
            this.error = 'All field is required';
            return false;
        }

        this.activeLoading = true
        this.$vs.loading({
            type:'default',
        })

        RequestNewReset({
            email:this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
        })
        .then(res => {
            this.activeLoading = false
            this.$vs.loading.close()
            this.$vs.notify({title:'Password reset Successful',text:'Login to continue',color:'warning',position:'top-right'});
            console.log(res);
        })
        .catch(err => {
            this.activeLoading = false
            this.$vs.loading.close()
            console.log(err)
        });

    }
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
    background-image: linear-gradient(to bottom right, #034013, #17c964);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

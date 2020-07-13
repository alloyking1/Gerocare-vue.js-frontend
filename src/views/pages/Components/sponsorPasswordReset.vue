<template>
    <div>
       <div>
            <ValidationObserver ref="passwordReset">    
                <form @submit.prevent="validate">
                    <ValidationProvider  name="Email" rules="required" v-slot="{ errors }">
                        <vs-input name="Current Password" type="password" placeholder="Enter Current Password" v-model="data.old_password" class="w-full"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider  name="Password" rules="required" v-slot="{ errors }">
                        <vs-input type="password" name="New Password" placeholder="Enter New Password" v-model="data.password" class="w-full mt-4"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider  name="Password" rules="required" v-slot="{ errors }">
                        <vs-input type="password" name="Confirm New Password" placeholder="Confirm New Password" v-model="data.password_confirmation" class="w-full mt-4"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    
                    <div class="p-5">
                        <div class="p-5">
                            <input class="float-right authBtnCustom pl-4 pr-4 p-3" type="submit" value="Save" />
                        </div>
                    </div>

                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import { mapState } from 'vuex'
    export default {
        data(){
            return{
                data:{}
            }
        },

        computed:{
            ...mapState({
                sponsor: state => state.user
            })
        },


        methods:{
            async validate(){
                
                if(this.data.password === this.data.password_confirmation){
                    
                    if(await this.$refs.passwordReset.validate())
                    this.$emit('popup', true)
                    try{
                        this.$vs.loading();
                        this.data.email = this.sponsor.user.email
                        await this.$store.dispatch("updatePassword", this.data)
                        this.$vs.notify({
                        title: "Password Changed",
                        text: "You have successfully changed your password",
                        color: "warning",
                        position: "top-right"
                        });
                        this.$vs.loading.close();
                    }catch(e){
                        this.$vs.loading.close();
                        this.$vs.notify({
                        title: "Password reset failed",
                        text: "Something is wrong please reload and try again",
                        color: "danger",
                        position: "top-right"
                        });
                        console.log(e)
                    }
                }else{
                    this.$vs.notify({
                    title: "Password Does not match",
                    text: "Your new password does not match",
                    color: "danger",
                    position: "top-right"
                    });
                }
                
                
            }
        },

        components:{
            ValidationProvider,
            ValidationObserver
        }
        
    }
</script>
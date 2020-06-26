<template>
    <div>
       <div>
            <ValidationObserver ref="passwordReset">    
                <form @submit.prevent="validate">
                    <ValidationProvider  name="Email" rules="required" v-slot="{ errors }">
                        <vs-input name="Current Password" type="password" placeholder="Enter Current Password" v-model="data.current_password" class="w-full"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider  name="Password" rules="required" v-slot="{ errors }">
                        <vs-input type="password" name="New Password" placeholder="Enter New Password" v-model="data.new_password" class="w-full mt-4"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider  name="Password" rules="required" v-slot="{ errors }">
                        <vs-input type="password" name="Confirm New Password" placeholder="Confirm New Password" v-model="data.new_password_confirmed" class="w-full mt-4"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    
                    <div class="p-5">
                        <div class="p-5">
                            <input class="float-right authBtnCustom pl-4 pr-4 p-3" type="submit" value="Login" />
                        </div>
                    </div>

                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    export default {
        data(){
            return{
                data:{}
            }
        },

        methods:{
            async validate(){
                if(await this.$refs.passwordReset.validate())
                return
                
            }
        },

        components:{
            ValidationProvider,
            ValidationObserver
        }
        
    }
</script>
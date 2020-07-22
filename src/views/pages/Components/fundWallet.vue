<template>
    <div>
        <div>
            <ValidationObserver ref="fundWallet">    
                <form @submit.prevent="pay">
                    <ValidationProvider  name="Amount" rules="required" v-slot="{ errors }">
                        <vs-input name="Amount" type="number" placeholder="Enter Amount" v-model="data.amount" class="w-full"/>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    
                    <div class="p-5">
                        <div class="p-5">
                            <input class="float-right authBtnCustom pl-4 pr-4 p-3" type="submit" value="Fund" />
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
        return {
            data:{
                email:this.$store.state.user.sponsor.email,
                payer:'wallet'
            }
        }
    },

    methods:{
        async pay(){
            if(await this.$refs.fundWallet.validate()){

                this.$vs.loading();

                const payloadData = {}
                payloadData.id = this.$store.state.user.sponsor.id
                payloadData.data = this.data
                console.log(await this.$store.dispatch("fundWallet", payloadData))
                this.data.amount = ""
                this.$emit('close', true)
                this.$vs.loading.close()
                this.$vs.notify({title:'Success', text:'Wallet funded successfully', color:'success',position:'top-right'})
            }
        }
    },

    components:{
        ValidationProvider,
        ValidationObserver
    }
}
</script>
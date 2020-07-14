<template>
    <div>
        <vx-card class="mb-2 bg-primary-gradient greet-user">
            <div class="flex justify-between flex-wrap p-1">
                <span class="card-span">{{ card.card_type }}</span>
                <span class="card-span">Delete</span>
            </div>

            <div class="flex justify-around p-2">
                <svg width="53" height="30" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#E65252"/>
                    <circle cx="38" cy="15" r="15" fill="#E9BA15"/>
                </svg>
                <p>XXXX - XXXX - XXXX - {{ card.last4 }}</p>
            </div>
            <div class="text-left card-span p-3 pl-5 ml-5">
                <p>MasterCard - Expires {{ card.exp_month }}/{{ card.exp_year }}</p>
                <p>Billed on the first of every month</p>
                <p>Next billing due July 01,2019</p>

                <div class="mt-4" @click="setDefaultCard(card.id)">

                    <vs-switch color="dark" v-model="switch2" icon-pack="feather" vs-icon="icon-check" /> 
                    <label class="mt-5" style="color:#75726e">Set Default</label>
                </div>
            </div>   

        </vx-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:['card'],
    data(){
        return{
            switch2:false,
        }
    },


    methods:{
        async setDefaultCard(id){
            const payload = {};
            payload.default = 1
            const data = {
                cardId: id,
                sponsor: this.$store.state.user.sponsor.id,
                payload
            }
            // console.log(this.$store.state.user.sponsor.id);
            
            console.log(await this.$store.dispatch("setDefaultCard", data))
        }
    }
}
</script>
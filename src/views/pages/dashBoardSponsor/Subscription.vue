
<template>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">

            <vx-card class="mt-2 mb-2">
                <h3 style="font-size:10px" class="pb-2">SELECT A SERVICE TO SUBSCRIBE TO</h3>
                <vs-divider></vs-divider>
                <p style="font-size:10px" class="pb-2">Home Visit Services</p>
                <vs-button color="primary" type="filled" @click="popupActivo=true">SUBSCRIBE</vs-button>

                <vs-divider></vs-divider>
                <p style="font-size:10px" class="pb-2">Tele-Consultation Service</p>
                <vs-button color="success" type="filled" @click="popupActivo=true">SUBSCRIBE</vs-button>
                <vs-divider></vs-divider>
                
                <p style="font-size:10px" class="pb-2">On-demand Visitation Service</p>
                <vs-button color="warning" type="filled" @click="popupActivo=true">SUBSCRIBE</vs-button>
            </vx-card>
            
        </div>

        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
            <div class="container w-full">
                <subscriptionHistory></subscriptionHistory>
            </div>
        </div>

        <div>
            <vs-popup :active.sync="popupActivo">
                <subscriptionPayment></subscriptionPayment>
            </vs-popup>
        </div>
    </div>
</template>

<script>
    import subscriptionHistory from '../Components/subscriptionHistory'
    import subscriptionPayment from '../Components/subscriptionPayment'

    export default{
        data(){
            return{
                popupActivo:false
            }
        },
        
        components:{
            subscriptionHistory,
            subscriptionPayment
        }
    }
</script>

<style scoped>

</style>
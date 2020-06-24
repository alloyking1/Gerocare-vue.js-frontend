<template>
    <div class="vx-col md:w-2/2 w-full mt-2">
        <div class="vx-col md:w-2/2 w-full mt-2">
            <!-- <ValidationProvider  name="Number of Visits" rules="required" v-slot="{ errors }"> -->
                <vs-select class="w-full select-large" placeholder="Visits/Month" v-model="paymentDetails.no_of_visits" @change="visitCost">
                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in visit" class="w-full" />
                </vs-select>
                <span>{{ errors[0] }}</span>
            <!-- </ValidationProvider> -->
        </div>
        
        <div class="vx-col md:w-2/2 w-full mt-2">
            <!-- <ValidationProvider  name="Duration" rules="required" v-slot="{ errors }"> -->
                <vs-select  class="w-full select-large" placeholder="Month/Year" v-model="paymentDetails.sub_duration" @change="visitCost">
                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in months" class="w-full" />
                </vs-select>
                <span>{{ errors[0] }}</span>
            <!-- </ValidationProvider> -->
        </div>

        <div class="vx-col md:w-2/2 w-full mt-2">
            <div class="text-center p-4">

                <p class="p-2">AMOUNT</p>
                <h3 class="text-5xl p-2">N {{visitCostSum}}</h3>
                <p class="p-2">1 visit every month for 3 months</p>
                <vs-radio color="success" vs-name="payment" @change="emitPaymentDetails" vs-value="pay_now" v-model="paymentDetails.pay_action">Pay Now</vs-radio>
                <vs-radio style="margin-left:10px;" vs-name="payment" @change="emitPaymentDetails" color="success" vs-value="pay_later" v-model="paymentDetails.pay_action">Pay Later</vs-radio>
            </div>
        </div>

        <div class="vx-col md:w-2/2 w-full mt-2" v-if="paymentDetails.payment === 'true'">
            <!-- <ValidationProvider  name="Duration" rules="required" v-slot="{ errors }"> -->
                <vs-select class="w-full select-large" placeholder="Payment methods" v-model="paymentDetails.paymentDetails.paymentMethod">
                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in paymentOption" class="w-full" />
                </vs-select>
                <span>{{ errors[0] }}</span>
            <!-- </ValidationProvider> -->
        </div>
        <!-- <button type="primary" class="btn-custom-next m-2" slot="finish">FINISH</button> -->
    </div>
</template>


<script>
export default {
    props:['service', 'patient_type'],

    data(){
        return{
            visitCostSum:0,
            paymentDetails:{},
            visit:[
				{name: '1/Month', value:1},
				{name: '2/Month', value:2},
				{name: '4/Month', value:4},
			],

			months: [
				{name: '1 Month', value:'1'},
				{name: '3 Months', value:'3'},
				{name: '6 Months', value:'6'},
				{name: '1 Year', value:'12'}
			],

			paymentOption:[
				{name:'Debit/Credit Cards', value:'card'},
				{name:'Teller Payment/Bankd Transfer', value:'TF'}
			],
        }
    },

    methods:{
        visitCost(){

            this.paymentDetails.service_id = this.service.id
			let visits = parseInt(this.paymentDetails.no_of_visit) || 1;
			let months = parseInt(this.paymentDetails.sub_duration) || 1;
			let amount = this.service.amount;
        
			let cost = visits * amount;
			let total = cost * months;
			this.visitCostSum = total;
            this.paymentDetails.visitCostSum = this.visitCostSum
		
		},

        emitPaymentDetails() {
            this.$emit('payment-details', this.paymentDetails);
        }
    }
}
</script>
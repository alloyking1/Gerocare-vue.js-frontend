<template>
    <div>
        <div class="vx-col w-full sm:w-3/3 md:w-3/3 mb-base">
            
            <vx-card title="" class="p-2">
                <div class="container pl-5 pr-5 pt-5">
                    <h3 class="p-1">New Subscription</h3>
                    <vs-select v-model="paymentDetails.patient_id" placeholder="Select Elderly" class="w-full select-large mb-5" @change="getElderlyById">
                        <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in allElderly" class="w-full"/>
                    </vs-select>
                    <div class="container" v-if="showResult">
                        <div class="flex justify-between flex-wrap">
                            <p class="billing-text">Name</p>
                            <p class="">{{eachElderly.name}}</p>
                            <vs-divider />
                            <p class="billing-text">Status</p>
                            <p class="billing-inner">{{eachElderly.status}}</p>
                            <vs-divider />
                            <p class="billing-text">Plan</p>
                            <p class="billing-inner">Basic Home Visit</p>
                            <vs-divider />
                        </div>
                    </div>
                </div>

                <div class="add-form">
                    <h3 class="text-center pb-5 text-1xl">Add Subscription</h3>

                    <div class="container">
                        <div class="vx-row">
                            <div class="vx-col md:w-2/2 w-full mt-2" v-if="!this.serviceProp">
                                <vs-select class="w-full select-large" placeholder="Services" v-model="paymentDetails.service_id" @change="visitCost">
                                    <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in service" class="w-full" />
                                </vs-select>
                            </div>

                            <div class="vx-col md:w-2/2 w-full mt-2">
                                <vs-select class="w-full select-large" placeholder="Visits/Month" v-model="paymentDetails.no_of_visits" @change="visitCost">
                                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in visit" class="w-full" />
                                </vs-select>
                            </div>
                            
                            <div class="vx-col md:w-2/2 w-full mt-2">
                                <vs-select  class="w-full select-large" placeholder="Month/Year" v-model="paymentDetails.sub_duration" @change="visitCost">
                                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in months" class="w-full" />
                                </vs-select>
                            </div>

                            <div class="vx-col md:w-2/2 w-full mt-2">
                            <div class="text-center p-4">

                                <p class="p-2">AMOUNT</p>
                                <h3 class="text-5xl p-2">N {{this.visitCostSum}}</h3>
                                <p class="p-2">{{visitCounts}} visit every month for {{monthsCounts}} months</p>
                            </div>
                            </div>

                            <div class="vx-col md:w-2/2 w-full mt-2" v-if="payment === 'true'">
                                <vs-select class="w-full select-large" placeholder="Payment methods" v-model="paymentDetails.paymentMethod">
                                    <vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in paymentOption" class="w-full" />
                                </vs-select>
                            </div>
                        </div>
                    </div>
                </div>

                <vs-button icon-pack="feather" @click="subscribe"  class="shadow-md w-full cutomBtn" id="button-with-loading">PAY NOW</vs-button>
                
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    props:['serviceProp'],
    data(){
        return {
            paymentDetails:{
            },
            visitCostSum:0,
            payment:'',
            elderly:'',
            showResult:false,
            visitCounts:'',
            monthsCounts:'',

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

            service:[],
            
			allElderly:[],
            eachElderly:{},
 
        }
    }, 

    methods:{
        visitCost(){
            
			this.visitCounts = this.paymentDetails.no_of_visits || 0;
			this.monthsCounts = this.paymentDetails.sub_duration || 0;
			let amount = 0;

            if(this.serviceProp){
                const service = this.$store.getters.getServiceById(this.serviceProp)
                this.paymentDetails.service_id = service.id //assing service_id a value
                amount = service.amount
            }else{
                const service = this.$store.getters.getServiceById(this.paymentDetails.service_id)
                amount = service.amount
            }

			let cost = this.visitCounts * amount;
			let total = cost * this.monthsCounts;
			this.visitCostSum = total;
            
		
        },
        
        fetchElderly(){
            let patients = this.$store.state.user.sponsor.patients
            this.allElderly = patients
        },

        fetService(){
            let service = this.$store.state.services.data
            this.service = service
        },

        getElderlyById(){
            this.showResult = true
            let result = this.$store.getters.getElderlyById(this.paymentDetails.patient_id)
            this.eachElderly = result
        },

        appendFormDetails(amount){
            let form = new FormData
            form.append('amount', amount*100)
            form.append('payer', "patient")

            for(const key in this.paymentDetails){
				if(this.paymentDetails.hasOwnProperty(key)){
					form.append(key, this.paymentDetails[key])
				}
			}
            return form
        },

        subscribe(){
            let id = this.$store.state.user.sponsor.id
            let form = this.appendFormDetails(this.visitCostSum)
            
            let data={}
            data.id = id
            data.data=form

            this.$store.dispatch('createSubscription', data)
            this.$vs.loading({
                background: this.backgroundLoading,
                color: this.colorLoading,
                container: "#button-with-loading",
                scale: 0.45
            })
            setTimeout( ()=> {
                this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            }, 7000);
        },

        async fetchSubscriptions(){
            await this.$store.dispatch('fetchSubscriptions')
        }

    },

    created(){
        this.fetchElderly()
        this.fetService()
    },
}
</script>
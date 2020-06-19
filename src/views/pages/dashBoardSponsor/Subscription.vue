<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
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
                        <!-- <form action="">
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="Basic Home Visit" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="1 visit / Month" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="3 Months" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>

                            <div class="text-center visits p-3">
                                <h6 class="p-2">AMOUNT</h6>
                                <h2 class="p-2 text-5xl"> N 18,900</h2>
                                <p class="p-2">1 visit every month for 3 months</p>
                                <vs-radio color="success" v-model="radios2" vs-value="Success">Pay Now</vs-radio>
                                <vs-radio style="margin-left:10px;" color="success" v-model="radios2" vs-value="Success">Pay Later</vs-radio>
                            </div>
                            
                            <vs-button icon-pack="feather" class="shadow-md w-full cutomBtn">CONFIRM</vs-button>
                        </form> -->

                        <div class="container">
                            <div class="vx-row">
                                <div class="vx-col md:w-2/2 w-full mt-2">
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
                                    <p class="p-2">1 visit every month for 3 months</p>
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

                    <vs-button icon-pack="feather" @click="subscribe"  class="shadow-md w-full cutomBtn">PAY NOW</vs-button>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base">
                <vx-card style="padding:2.5rem">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <vs-table  pagination max-items="3" stripe search :data="subscriptions">
                                <template slot="header">
                                    <h3>
                                    Subscription
                                    </h3>
                                </template>
                                <template slot="thead">
                                    <vs-th sort-key="email">
                                    Date
                                    </vs-th>
                                    <vs-th sort-key="type">
                                    Type
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    For
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Visit Count(s)
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Status
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Due Date
                                    </vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(subscription, indextr) in data" >
                                    <vs-td :data="subscription.created_at">
                                        {{moment(subscription.created_at).format('MM-DD-YYYY')}}
                                    </vs-td>
                                    <vs-td :data="subscription.description">
                                        {{subscription.description}}
                                    </vs-td>

                                    <vs-td :data="subscription.patient? subscription.patient.name: ''">
                                            {{subscription.patient ? subscription.patient.name : ''}}
                                    </vs-td>

                                    <!-- <vs-td :data="subscription.name">
                                        <span v-if="subscription.name">
                                            {{subscription.subscription.name}}
                                        </span>
                                        <span v-else>
                                            {{subscription.subscription.name}}
                                            testing
                                        </span>
                                    </vs-td> -->

                                    <vs-td :data="subscription.visit_count">
                                        {{subscription.visit_count}}
                                    </vs-td>

                                    <vs-td :data="subscription.status">
                                        {{subscription.status}}
                                    </vs-td>

                                    <vs-td :data="subscription.created_at">
                                        {{moment(subscription.created_at).format('DD-MM-YYYY')}}
                                    </vs-td>
                                    </vs-tr>
                                </template>


                            </vs-table>
                        </div>
                                
                    </template>
                </vx-card>
            </div>
        </div>

    </div>
        
</template>

<script>
import {  mapState } from 'vuex'

export default {
    data(){
        return {
            paymentDetails:{},
            visitCostSum:0,
            payment:'',
            elderly:'',
            showResult:false,

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
            users:[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                }
            ]
 
        }
    }, 

    methods:{
        visitCost(){
            
			let visits = this.paymentDetails.no_of_visits || 0;
			let months = this.paymentDetails.sub_duration || 0;
			let amount = 0;

            // console.log(this.paymentDetails.service_id)
            const serviceCost = this.$store.getters.getServiceById(this.paymentDetails.service_id)
            
            amount = serviceCost.amount
			let cost = visits * amount;
			let total = cost * months;
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
            let id = this.$store.state.user.user.id
            let form = this.appendFormDetails(this.visitCostSum)
            
            let data={}
            data.id = id
            data.data=form
            this.$store.dispatch('createSubscription', data)
        },

        async fetchSubscriptions(){
            await this.$store.dispatch('fetchSubscriptions')
            // console.log(response)
        }

    },

    computed:{
        ...mapState(['subscriptions'])
    },

    created(){
        this.fetchElderly()
        this.fetService()
        this.fetchSubscriptions()
    }
}
</script>

<style scoped>
    .p-100{
        padding:0.5rem;
    }
    .name-inner{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        margin-left: 30px;

        color: #808495;

    }
    .name-heading{
        /* font-family: Roboto; */
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        color: #000000;
    }
    .add-form{
        top: 323px;
        border-radius: 5px;
        padding: 1.5rem;
    }

    .visits{
        line-height: 30px;
    }

    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

</style>
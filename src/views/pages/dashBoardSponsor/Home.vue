<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/6 mb-base">
                <p>Hi</p>
                <br>
                <h3 class="text-3xl">{{data.sponsor.name || ''}}</h3>
			</div>
            
            <div class="vx-col w-full lg:w-2/5 mb-base">
                <div class="vx-row text-center ml-24 mr-24 pl-10 pb-8">
                    <h5>Next Due Subscription</h5>
                </div>
                <div class="flex justify-between text-center mt-4" slot="no-body-bottom">
                    <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0 border-t-0">
                        <p class="mb-4 text-2xl">{{data.most_due_subscription.patient.name || ''}}</p>
                        <p class="mt-4">{{ moment(data.most_due_subscription.created_at).format("DD-MM-YYYY") }}</p>
                    </div>
                    <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-t-0">
                        <p class="mb-4 text-2xl font-danger">{{data.most_due_subscription.patient.visit_count}}</p>
                        <p class="mt-4 font-purple" @click="nextDueSubscription">Pay Now</p>
                    </div>
                </div>

            </div>

			<div class="vx-col w-full lg:w-2/5 mb-base">
				<vx-card title="" class="text-center bg-primary-gradient greet-user">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <div class=" font-white">
                                <p class="text-center pb-3">Wallet Balance:</p>
                                <h1>
                                  <sup class="text-lg font-white">N</sup>
                                  <span class="font-white text-5xl">{{formatWalletAmount(data.sponsor.wallet_balance) || 'N 0'}}</span>
                                </h1>
                                <br>
                                <small>
                                  <router-link to="/billing"><span class="font-purple">See billing history: </span></router-link>
                                </small>
                            </div>
                        </div>
                        
                    </template>
                    
                </vx-card>
			</div>

			
		</div>

		<div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="UsersIcon"
                  icon-right
                  :statistic= data.insights.patients
                  statisticTitle="Number of Elderly" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="GiftIcon"
                  icon-right
                  :statistic= data.insights.visits
                  statisticTitle="Number of Visits" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="UserCheckIcon"
                  icon-right
                  :statistic= data.insights.subscriptions
                  statisticTitle="Active Subscriptions" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="MailIcon"
                  icon-right
                  :statistic= data.insights.message
                  statisticTitle="Messages" />
			</div>
		</div>

		<!-- final row -->
		<div class="vx-row">
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <div class="mb-2">
                    <h5>Subscriptions</h5>
                </div>
                <vx-card class="mb-2" v-for="(subscription, i) in data.subscriptions" :key="i">

                    <p class="mb-4 text-2xl">
                        {{subscription.patient.name}}
                    </p>
                    <p class="mt-4 font-lemon">{{subscription.patient.visit_count}} visits remaining</p>
                </vx-card>
			</div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
                <recentVisits></recentVisits>
            </div>
		</div>

	</div>
</template>

<script>

import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue' 
import VueApexCharts from 'vue-apexcharts'
import recentVisits from '../Components/recentVisits'
import helper from '../../../helpers/helper'

export default {
    data(){
        return{
            data:{},
            elderly:'',
            users:[]
        }
    },

    methods:{

        formatWalletAmount(amount){
            return helper.numberFormat(amount)
        },

        fetchSponsor(){
            this.data = this.$store.state.user;
        },

        async fetchAppointment(){
            await this.$store.dispatch('fetchRecentVisit', this.$store.state.user.sponsor.id)
        },

        /**fetch service and update state */
        async fetchServices(){
			await this.$store.dispatch('fetchServices')
 		},

        async fetchComplaint(){
            console.log(await this.$store.dispatch('fetchComplaint', this.data.sponsor.id))
        },

        async fetchSubscriptions(){
            await this.$store.dispatch('fetchSubscriptions')
        },

        async getPrescription() {
            let data = {};
            data.id = this.$store.state.user.sponsor.id;
            await this.$store.dispatch("fetchMedRequest", data);
        },

        async fetchBilling(){
            const id = this.$store.state.user.sponsor.id
            const data ={}
            data.id = id
            await this.$store.dispatch("fetchTransactions", data)
        },

        async nextDueSubscription(){
            const amount = 8000 * 100
            const form = new FormData
            form.append('amount', amount)
            form.append('name', this.data.sponsor.name)
            form.append('email', this.data.sponsor.email || "test@gmail.com")

            form.append('patient_id', this.data.most_due_subscription.patient.id)
            form.append('service_id', 1)
            form.append('payer', "patient")
            form.append('sub_duration', this.data.most_due_subscription.visit_count)
            form.append('subscription', 1)
            form.append('no_of_visits', this.data.most_due_subscription.visit_count)
            form.append('sponsor_id', this.data.sponsor.id)

            const value ={
                id:this.data.sponsor.id,
                data:form
            }
            await this.$store.dispatch('createSubscription', value)
        },

        async getCards(){
            await this.$store.dispatch("fetchCards", this.data.sponsor.id)
        }

    },

    
    created(){
        this.fetchSponsor();
        this.fetchServices();
        this.fetchAppointment();
        this.fetchSubscriptions();
        this.getPrescription();
        this.fetchBilling();
        this.getCards();
        this.fetchComplaint();
    },

	components:{
        VueApexCharts,
		StatisticsCardLine,
        recentVisits	
	}	
}
</script>

<style scoped>
    .font-gray{
        color:#CACBCE;
    }
    .font-danger{
        color: #E65252;
    }
    .font-purple{
        color:#9F1AA2;
        cursor:pointer
    }
    .font-white{
        color: white;
    }
    .font-lemon{
        color:#9DCB47;
    }
</style>




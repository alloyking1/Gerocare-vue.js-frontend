<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/6 mb-base">
                <p>Hi</p>
                <br>
                <h3 class="text-3xl">{{data.sponsor.name || ''}}</h3>
                <!-- <br>
                <small class="font-gray">{{data.sponsor.phone_number || ''}}</small>
                <br>
                <small class="font-gray">{{data.sponsor.email || data.user.email }}</small> -->
			</div>
            
            <div class="vx-col w-full lg:w-2/5 mb-base">
                <div class="vx-row text-center ml-24 mr-24 pl-10 pb-8">
                    <h5>Next Due Subscription</h5>
                </div>
                <div class="flex justify-between text-center mt-4" slot="no-body-bottom">
                    <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0 border-t-0">
                        <p class="mb-4 text-2xl">{{data.most_due_subscription.patient.name || ''}}</p>
                        <p class="mt-4">12-12-12</p>
                    </div>
                    <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-t-0">
                        <p class="mb-4 text-2xl font-danger">{{data.most_due_subscription.visit_count}}</p>
                        <p class="mt-4 font-purple">Pay Now</p>
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
                                  <span class="font-white text-5xl">{{data.insights.balance || 'N0'}}</span>
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
                <vx-card class="mb-2">
                    <p class="mb-4 text-2xl">
                        <!-- <vs-chip color="success" style="min-width: 15px!important; min-height: 8px!important;"></vs-chip> -->
                        {{data.name}}
                    </p>
                    <p class="mt-4 font-lemon">8 visits remaining</p>
                </vx-card>
                <vx-card>
                    <p class="mb-4 text-1xl text-2xl">Luna Q</p>
                    <p class="mt-4 text-danger">0 Visits Remaining</p>
                </vx-card>
			</div>

			<!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
				<vx-card>
                    <vs-table  pagination max-items="3" stripe search :data="users">
                        <template slot="header">
                            <h3>
                            Recent Visits
                            </h3>
                        </template>
                        <template slot="thead">
                            <vs-th sort-key="email">
                            Date
                            </vs-th>
                            <vs-th sort-key="username">
                            Description
                            </vs-th>
                            <vs-th sort-key="id">
                            Status
                            </vs-th>
                            <vs-th sort-key="id">
                            Report
                            </vs-th>
                        </template>

                        <template slot-scope="{data}">
                            <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].email">
                                {{data[indextr].email}}
                            </vs-td>

                            <vs-td :data="data[indextr].username">
                                {{data[indextr].username}}
                            </vs-td>

                            <vs-td :data="data[indextr].id">
                                {{data[indextr].id}}
                            </vs-td>
                            </vs-tr>
                        </template>


                    </vs-table>
                </vx-card>
                
			</div> -->
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

export default {
    data(){
        return{
            data:{},
            elderly:'',
            users:[]
        }
    },

    methods:{
        fetchSponsor(){
            this.data = this.$store.state.user;
        },

        async fetchAppointment(){
            await this.$store.dispatch('fetchRecentVisit', this.$store.state.user.sponsor.id)
        },

        /**fetch service and update state */
        async fetchServices(){
			await this.$store.dispatch('fetchServices');
 		},

        async fetchSubscriptions(){
            await this.$store.dispatch('fetchSubscriptions')
        },

        async getPrescription() {
            let data = {};
            data.id = this.$store.state.user.sponsor.id;
            await this.$store.dispatch("fetchMedRequest", data);
        }

    },

    
    created(){
        this.fetchSponsor();
        this.fetchServices();
        this.fetchAppointment();
        this.fetchSubscriptions();
        this.getPrescription();
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
    }
    .font-white{
        color: white;
    }
    .font-lemon{
        color:#9DCB47;
    }
</style>




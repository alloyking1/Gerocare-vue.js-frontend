<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/2 mb-base">
				<vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
				<feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
				<h1 class="mb-6 text-white">Welcome {{this.data.name}}</h1>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white" v-if="this.data.user.email_verified === false">Please take a moment to  <strong>Verify your email</strong> head over to your profile for more.</p>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white" v-else>Your email is  <strong>Verified</strong> Welcome.</p>
				</vx-card>
			</div>
			<div class="vx-col w-full lg:w-1/2 mb-base">
				<vx-card title="User Wallet">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <div>
                                <h1>
                                  <sup class="text-lg">$</sup>
                                  <span>233</span>
                                </h1>
                                <br>
                                <small>
                                  <span class="text-grey">Deposits: </span>
                                  <span>$</span>
                                  <span>200</span>
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
                  :statistic= this.data.patients.length
                  statisticTitle="Number of Elderly" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="GiftIcon"
                  icon-right
                  statistic="2"
                  statisticTitle="Number of Visits" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="UserCheckIcon"
                  icon-right
                  statistic="1"
                  statisticTitle="Active Subscriptions" />
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="MailIcon"
                  icon-right
                  statistic="0"
                  statisticTitle="Messages" />
			</div>
		</div>

		<!-- final row -->
		<div class="vx-row">
			
			<div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base">
				<statistics-card-line
                        icon="MonitorIcon"
                        icon-right
                        statistic="78.9k"
                        statisticTitle="Site Traffic"
                        :chartData="siteTrafficChartData" />
			</div>
		</div>
	</div>
</template>

<script>

import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue' 
import VueApexCharts from 'vue-apexcharts'

import {getSponsor} from '../../../api/sponsor/sponsor.api'

export default {
    data(){
        return{
            data:{},
            elderly:''
        }
    },

    created(){
        
        this.fetchSponsor();
        this.elderly = this.$store.state.sponsor.patients.length 
    },

    methods:{
        fetchSponsor(){
            this.$vs.loading()

            let id = this.$store.state.user.id
            getSponsor(id)
            .then(res => {
                this.data = res.data.data;
                console.log(this.data)
                this.$store.dispatch("updateSponsorInfo", res.data.data);

                this.$vs.loading.close();
            })
        }
    },


	components:{
        VueApexCharts,
		StatisticsCardLine	
	}	
}
</script>




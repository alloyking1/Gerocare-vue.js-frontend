<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/2 mb-base">
				<vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
							<!-- <img src="@/assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" > -->
							<!-- <img src="@/assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175"> -->
				<feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
				<!-- <h1 class="mb-6 text-white">Congratulations {{ checkpointReward.userName }},</h1> -->
				<h1 class="mb-6 text-white">Welcome {{this.$store.state.user.name}}</h1>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">You have done <strong>some text</strong> more sales today. Check your new badge in your profile.</p>
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
                  statistic="8"
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
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<vx-card title="Subscription">
					tesint
				</vx-card>
			</div>
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
				<vx-card title="Statistics" class="mb-base">
                    

                    <statistics-card-line
                        icon="MonitorIcon"
                        icon-right
                        statistic="78.9k"
                        statisticTitle="Site Traffic"
                        :chartData="siteTrafficChartData" />
                </vx-card>
			</div>
		</div>
	</div>
</template>

<script>

import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue' 
import VueApexCharts from 'vue-apexcharts'

export default {
    data(){
        return{
            siteTrafficChartData: {
                series: [{
                    name: 'Traffic Rate',
                    data: [150, 200, 125, 225, 200, 250]
                }],
                chartOptions: {
                    grid: {
                        show: false,
                        padding: {
                            left: 0,
                            right: 0
                        }
                    },
                    chart: {
                        type: 'line',
                        dropShadow: {
                            enabled: true,
                            top: 5,
                            left: 0,
                            blur: 4,
                            opacity: 0.10,
                        },
                        toolbar: {
                            show: false,
                        },
                        sparkline: {
                            enabled: true
                        }
                    },
                    stroke: {
                        width: 5,
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'numeric',
                    },
                    colors: ['#7367F0'],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: ['#A9A2F6'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    markers: {
                        size: 0,
                        hover: {
                            size: 5
                        }
                    },
                    tooltip: {
                        x: { show: false }
                    },
                }
            },
        }
    },

	components:{
        VueApexCharts,
		StatisticsCardLine	
	}	
}
</script>




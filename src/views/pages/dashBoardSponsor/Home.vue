<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/2 mb-base">
				<vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
							<!-- <img src="@/assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" > -->
							<!-- <img src="@/assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175"> -->
				<feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
				<!-- <h1 class="mb-6 text-white">Congratulations {{ checkpointReward.userName }},</h1> -->
				<h1 class="mb-6 text-white">Welcome to your profile</h1>
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
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <!-- <vue-apex-charts type="line" height="266" :options="analyticsData.salesLine.chartOptions" :series="salesLine.series" /> -->
                    </div>
                </vx-card>
			</div>
		</div>
	</div>
</template>

<script>

import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
	components:{
		StatisticsCardLine	
	}	
}
</script>




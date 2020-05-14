<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/4 mb-base">
				<vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
				<feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
				<h1 class="mb-6 text-white">Welcome {{this.data.name}}</h1>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white" v-if="this.data.user.email_verified === false">Please take a moment to  <strong>Verify your email</strong> head over to your profile for more.</p>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white" v-else>Your email is  <strong>Verified</strong> Welcome.</p>
				</vx-card>
			</div>
            
            <div class="vx-col w-full lg:w-1/3 mb-base">
                <vx-card title="Next Due Subscription">

                    <!-- DATA -->
                    <div class="flex justify-between text-center mt-4" slot="no-body-bottom">

                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mb-4 text-3xl font-semibold">Patient Name</p>
                            <p class="mt-4">12/12/12</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mb-4 text-3xl font-semibold">N6,000</p>
                            <p class="mt-4">Amount</p>
                        </div>
                    </div>
                </vx-card>
            </div>

			<div class="vx-col w-full lg:w-1/3 mb-base">
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
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<vx-card title="Subscriptions">
                    <template slot="no-body">
                        <div class="flex justify-between items-center p-6 border border-solid d-theme-border-grey-light border-r-0 border-l-0 border-t-0">
                            <!-- <div>
                                <p><span class="font-semibold">{{ todoToday.numComletedTasks }} task completed</span> out of {{ todoToday.totalTasks }}</p>
                                <vs-progress :percent="20" color="primary"></vs-progress>
                            </div> -->
                        </div>
                        <ul class="tasks-today-container">
                            <li class="px-6 py-4 tasks-today__task">
                                <div class="vx-row">
                                    <div class="vx-col w-full sm:w-auto">
                                        <p class="font-semibold text-lg">"patient Name"</p>
                                        <small>"Visits remaining"</small>
                                        <vs-divider/>
                                        <p class="font-semibold text-lg">"patient Name"</p>
                                        <small>"Visits remaining"</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </template>
                </vx-card>
			</div>

			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
				<vx-card>
                    <vs-table  pagination max-items="3" stripe search :data="users">
                        <template slot="header">
                            <h3>
                            Recent Visits
                            </h3>
                        </template>
                        <template slot="thead">
                            <vs-th sort-key="email">
                            Email
                            </vs-th>
                            <vs-th sort-key="username">
                            Name
                            </vs-th>
                            <vs-th sort-key="id">
                            Nro
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
            elderly:'',
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




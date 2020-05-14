<template>
<div>
    <!-- final row -->
		<div class="vx-row">
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<vx-card>
                    <h3 style="font-size:10px">PENDING APPOINTMENTS</h3>
                    <div class="pending-inner">
                        testing
                    </div>
                </vx-card>
                <br>
                <vx-card>
                    <h3 style="font-size:10px">UPCOMING APPOINTMENTS</h3>
                    <div class="upcoming-inner">
                        testing
                    </div>
                </vx-card>
                <br>
                <vx-card>
                    <h3 style="font-size:10px">CANCELED APPOINTMENTS</h3>
                    <div class="cancel-inner">
                        testing
                    </div>
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
                            DATE
                            </vs-th>
                            <vs-th sort-key="username">
                            DESCRIPTION
                            </vs-th>
                            <vs-th sort-key="id">
                            DOCTOR
                            </vs-th>
                            <vs-th sort-key="id">
                            DOCTOR
                            </vs-th>
                            <vs-th sort-key="id">
                            STATUS
                            </vs-th>
                            <vs-th sort-key="id">
                            REPORT
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


// api call
import {getSponsorAppointment} from '../../../api/sponsor/sponsor.api'

export default {
    data(){
        return{
            
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
        var sponsorId = this.$store.state.user.id;
        getSponsorAppointment(sponsorId)
        .then(res => {
            this.appointmentData = res.data.data;
            console.log(this.appointmentData);
        })
        .catch(error => {
            console.log(error)
        })

    },

    methods:{
        updateMonth (val) {
            this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
        },

    },
    
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/apps/simple-calendar.scss";

.pending-inner{
    border:1px solid skyblue;
}
.upcoming-inner{
    border:1px solid green;
}
.cancel-inner{
    border:1px solid red;
}
</style>
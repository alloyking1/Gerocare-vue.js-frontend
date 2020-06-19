<template>
<div>
    <!-- final row -->
		<div class="vx-row">
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
				<vx-card>
                    <h3 style="font-size:10px" class="pb-2">PENDING APPOINTMENTS</h3>
                    <div class="pending-inner mb-3 p-2" v-for="(appointment, i) in previousAppointments" :key="i">
                        <small >
                            Appointment with {{appointment.doctor.name || ''}} on {{appointment.appointment_date}} for {{appointment.patient.name}}.
                        </small>
                    </div>
                    <small v-if="isPreviousAppointmentEmpty">You have no upcoming appointments</small>
                </vx-card>
                <br>
                <vx-card>
                    <h3 style="font-size:10px" class="pb-2">UPCOMING APPOINTMENTS</h3>
                    <div class="upcoming-inner mb-3 p-2" v-for="(appointment, i) in upcomingAppointments" :key="i">
                        <small>
                            Appointment with {{appointment.doctor.name || ''}} on {{appointment.appointment_date}} for {{appointment.patient.name}}.
                        </small>
                        <small v-if="isPreviousAppointmentEmpty">You have no upcoming appointments</small>
                    </div>
                </vx-card>
                <br>
                <vx-card>
                    <h3 style="font-size:10px" class="pb-2">BOOKING APPOINTMENTS</h3>

                    <div class="cancel-inner mb-3 p-2" v-for="(appointment, i) in bookingAppointments" :key="i">
                        <small>
                            Appointment with {{appointment.doctor.name || ''}} on {{appointment.appointment_date}} for {{appointment.patient.name}}.
                        </small>
                        <small v-if="isPreviousAppointmentEmpty">You have no upcoming appointments</small>
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
                            <vs-th sort-key="date">
                            DATE
                            </vs-th>
                            <vs-th sort-key="description">
                            DESCRIPTION
                            </vs-th>
                            <vs-th sort-key="doctor">
                            DOCTOR
                            </vs-th>
                            <vs-th sort-key="patient">
                            PATIENT
                            </vs-th>
                            <vs-th sort-key="status">
                            STATUS
                            </vs-th>
                            <vs-th sort-key="report">
                            REPORT
                            </vs-th>
                        </template>

                        <template slot-scope="{data}">
                            <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].appointment_date">
                                {{data[indextr].appointment_date}}
                            </vs-td>

                            <vs-td :data="data[indextr].description">
                                {{data[indextr].description}}
                            </vs-td>

                            <vs-td :data="data[indextr].doctor">
                                {{data[indextr].doctor.name || 'kapasky'}}
                            </vs-td>
                            <vs-td :data="data[indextr].patient">
                                {{data[indextr].patient.name}}
                            </vs-td>
                            <vs-td :data="data[indextr].status">
                                {{data[indextr].status}}
                            </vs-td>
                            <vs-td :data="data[indextr].report">
                                <vs-button size="small">View</vs-button>
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
import { mapState } from 'vuex'

export default {
    data(){
        return{
            users:[],

        }
    },

    computed:{

        ...mapState([
            'previousAppointments',
            'upcomingAppointments',
            'bookingAppointments',
        ]),

        isPreviousAppointmentEmpty(){
            if(this.previousAppointments)
                return Object.entries(this.previousAppointments).length === 0;
            return true;
        },
    },

    methods:{
        async fetchAppointments(){
            this.$vs.loading()
            try{
                const data = {}
                data.id = this.$store.state.user.user.id
                const res = await this.$store.dispatch('fetchRecentVisit', data)
                this.users = res.data.data
                this.$vs.loading.close()
            }catch{
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'Could not load Appointments. Make sure you are connected to the internet',color:'danger',position:'top-right'})
                this.$vs.loading.close()
            }
        },
    },


    created(){
        
        this.fetchAppointments()
        
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
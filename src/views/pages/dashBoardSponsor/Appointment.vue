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
                <recentVisits></recentVisits>
            </div>
		</div>
        

</div>
</template>

<script>


// api call
import { mapState } from 'vuex'
import recentVisits from '../Components/recentVisits'

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

    components:{
        recentVisits
    }
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
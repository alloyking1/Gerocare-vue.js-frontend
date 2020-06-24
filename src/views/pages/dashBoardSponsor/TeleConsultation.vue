<template>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
            <vx-card>
                <h3 style="font-size:10px" class="pb-2">PENDING TELE-CONSULTATION</h3>
                <!-- <div class="pending-inner mb-3 p-2" v-for="(appointment, i) in previousAppointments" :key="i"> -->
                <div class="pending-inner mb-3 p-2">
                    <small >
                        <!-- Appointment with {{appointment.doctor.name || ''}} on {{moment(appointment.appointment_date).format('LLLL')}} for {{appointment.patient.name}}. -->
                        Phone consultation with Doctor Kapasky on today for one old papa.
                    </small>
                </div>
            </vx-card>
            <br>
            <vx-card>
                <h3 style="font-size:10px" class="pb-2">UPCOMING TELE-CONSULTATION</h3>
                <!-- <div class="pending-inner mb-3 p-2" v-for="(appointment, i) in previousAppointments" :key="i"> -->
                <div class="upcoming-inner mb-3 p-2">
                    <small >
                        <!-- Appointment with {{appointment.doctor.name || ''}} on {{moment(appointment.appointment_date).format('LLLL')}} for {{appointment.patient.name}}. -->
                        Phone consultation with Doctor Kapasky on today for one old papa.
                    </small>
                </div>
            </vx-card>
        </div>

        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
            <vx-card title="">
                <div class="container w-full">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qzh4rL5u34k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </vx-card>
        </div>
    </div>
</template>
<template>
    <div>

        <div>
            <vs-tabs alignment="center">
                <vs-tab label="Info">
                    <vx-card>
                        <div class="flex justify-between flex-wrap">
                            
                        <h6>APPOINTMENT DATE:</h6>
                        <p>{{data.appointment_date || ""}}</p>
                        <vs-divider />
                        <h6>DESCRIPTION:</h6>
                        <p>{{ data.description || ""}}</p>
                        <vs-divider />
                        <h6>DOCTOR :</h6>
                        <p>{{ data.doctor.name || "" }}</p>
                        <vs-divider />
                        <h6>PATIENT :</h6>
                        <p>{{ data.patient.name || "" }}</p>
                        <vs-divider />
                        <h6>STATUS :</h6>
                        <p>{{ data.check || "" }}</p>
                        <vs-divider />
                        </div>
                        <div class="flex justify-between flex-wrap">
                        <vs-button
                            class="w-full mt-6 cutomBtn"
                            style="background: #E65252 !important; border-radius:55px;"
                            >Delete</vs-button
                        >
                        </div>
                    </vx-card>
                </vs-tab>
                <vs-tab label="Doctor">
                        <vx-card>
                            <div class="flex justify-between flex-wrap">
                                
                            <h6>APPOINTMENT DATE:</h6>
                            <p>{{data.appointment_date || ""}}</p>
                            <vs-divider />
                            <h6>DESCRIPTION:</h6>
                            <p>{{ data.description || ""}}</p>
                            <vs-divider />
                            <h6>DOCTOR :</h6>
                            <!-- <p>{{ data.doctor.name || "" }}</p> -->
                            <vs-divider />
                            <h6>PATIENT :</h6>
                            <p>{{ data.patient.name || "" }}</p>
                            <vs-divider />
                            <h6>STATUS :</h6>
                            <p>{{ data.check || "" }}</p>
                            <vs-divider />
                            </div>
                            <div class="flex justify-between flex-wrap">
                            <vs-button
                                class="w-full mt-6 cutomBtn"
                                style="background: #E65252 !important; border-radius:55px;"
                                >Delete</vs-button
                            >
                            </div>
                        </vx-card>
                </vs-tab>
                <vs-tab label="Patient">
                    <vx-card>
                            <div class="flex justify-between flex-wrap">
                                
                            <h6>APPOINTMENT DATE:</h6>
                            <p>{{data.appointment_date || ""}}</p>
                            <vs-divider />
                            <h6>DESCRIPTION:</h6>
                            <p>{{ data.description || ""}}</p>
                            <vs-divider />
                            <h6>DOCTOR :</h6>
                            <!-- <p>{{ data.doctor.name || "" }}</p> -->
                            <vs-divider />
                            <h6>PATIENT :</h6>
                            <p>{{ data.patient.name || "" }}</p>
                            <vs-divider />
                            <h6>STATUS :</h6>
                            <p>{{ data.check || "" }}</p>
                            <vs-divider />
                            </div>
                            <div class="flex justify-between flex-wrap">
                            <vs-button
                                class="w-full mt-6 cutomBtn"
                                style="background: #E65252 !important; border-radius:55px;"
                                @click=""
                                >Delete</vs-button
                            >
                            </div>
                        </vx-card>
                </vs-tab>
            </vs-tabs>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{}
    }
}
</script>
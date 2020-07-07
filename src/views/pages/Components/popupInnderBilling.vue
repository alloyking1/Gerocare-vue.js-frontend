<template>
    <div>
        <div>
            <div>
                <vs-tabs alignment="center">
                    <vs-tab label="Info">
                        <vx-card>
                            <div class="flex justify-between flex-wrap">
                                
                            <h6>APPOINTMENT DATE:</h6>
                            <p>{{moment(data.created_at).format('MM-DD-YYYY')}}</p>
                            <vs-divider />
                            <h6>TYPE:</h6>
                            <p>{{ data.description || ""}}</p>
                            <vs-divider />
                            <h6>FOR :</h6>
                            <p>{{ data.patient.name || "" }}</p>
                            <vs-divider />
                            <h6>AMOUNT :</h6>
                            <p>{{ data.service.amount || "" }}</p>
                            <vs-divider />
                            <h6>STATUS :</h6>
                            <p>{{ data.service.status || "" }}</p>
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
                                    
                                <h6>Image:</h6>
                                 <div class="con-img ml-12 p-5">
                                    <img
                                    key="onlineImg"
                                    :src="data.patient.avatar"
                                    alt="@/assets/images/pages/gerocareAvater.svg"
                                    width="40"
                                    height="40"
                                    class="rounded-full shadow-md cursor-pointer block img-responsive"
                                    />
                                </div>
                                <vs-divider />
                                <h6>NAME:</h6>
                                <p>{{data.patient.name || ""}}</p>
                                <vs-divider />
                                <h6>PHONE NUMBER:</h6>
                                <p>{{ data.patient.phone_number || ""}}</p>
                                <vs-divider />
                                <h6>ADDRESS :</h6>
                                <p>{{ data.patient.address || "" }}</p>
                                <vs-divider />
                                <h6>STATE :</h6>
                                <p>{{ data.patient.state || "" }}</p>
                                <vs-divider />
                                <h6>CITY :</h6>
                                <p>{{ data.patient.city || "" }}</p>
                                <vs-divider />
                                <h6>TYPE :</h6>
                                <p>{{ data.patient.type || "" }}</p>
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
                    <vs-tab label="Service">
                        <vx-card>
                                <div class="flex justify-between flex-wrap">
                                    
                                <h6>NAME:</h6>
                                <p>{{data.service.name || "no data provided"}}</p>
                                <vs-divider />
                                <h6>status:</h6>
                                <p>{{ data.service.status || "null"}}</p>
                                <vs-divider />
                                <h6>description :</h6>
                                <p>{{ data.service.description || "null" }}</p>
                                <vs-divider />
                                <h6>amount :</h6>
                                <p>{{ data.service.amount || "" }}</p>
                                <vs-divider />
                                <h6>outside_city_amount :</h6>
                                <p>{{ data.service.outside_city_amount || "" }}</p>
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
    </div>
</template>

<script>
export default {
    props:['data'],
}
</script>
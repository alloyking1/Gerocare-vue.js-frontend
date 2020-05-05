<template>
    <div>
        <vs-tabs alignment="center">
            <vs-tab label="Profile">
                <div class="vx-col w-full lg:w-1/3">
                    <!-- ABOUT CARD -->
                    <vx-card title="About" class="mt-base">
                        <!-- ACTION SLOT -->
                        <template slot="actions">
                            <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                        </template>

                        <!-- USER BIO -->
                        <div class="Full Name">
                            <h6>Full Name:</h6>
                            <p>{{this.sponsor.user.name}}</p> 
                        </div>

                        <div class="mt-5">
                            <h6>Email:</h6>
                            <p>{{this.sponsor.user.email}}</p>  
                        </div>

                        <!-- OTEHR DATA -->
                        <div class="mt-5">
                            <h6>Phone Number:</h6>
                            <p>{{this.sponsor.phone_number}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>Address:</h6>
                            <p>{{this.sponsor.address || "Edit to add Address"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>City:</h6>
                            <p>{{this.sponsor.city || "Edit to add city"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>State:</h6>
                            <p>{{this.sponsor.state || "Edit to add state"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>Country:</h6>
                            <p>{{this.sponsor.country || "Edit to add country"}}</p>
                        </div> 

                    </vx-card>
                </div>
            </vs-tab>

            <vs-tab label="Edit">
                <div class="vx-col w-full lg:w-2/4">
                    <form action="">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Full Name" v-model="sponsor.user.name" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Phone Number" v-model="sponsor.phone_number" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="Address" v-model="sponsor.address" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="City" v-model="sponsor.city" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="State" v-model="sponsor.state" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Country" v-model="sponsor.country" class="w-full mt-5" />
                            </div>
                        </div>
                        <vs-button color="success" type="border" @click="editProfile()">Save</vs-button>
                    </form>
                </div>
            </vs-tab>
        </vs-tabs>
    </div>
</template>

<script>
import { updateSponsor } from  "../../../api/sponsor/sponsor.api";

export default {

    data(){
        return{
            sponsor:{}
        }
    },

    created(){
        this.sponsor = this.$store.state.sponsor;
        console.log(this.sponsor)
    },

    methods:{
        editProfile(){
            id = this.sponsor.user.id;
            updateSponsor(id, {
                name: this.sponsor.user.name,
                address: this.ponsor.address,
                city: this.sponsor.city,
                state: this.sponsor.state,
                country: this.sponsor.country,
                // currency: this.sponsor.user.name,
                // medium: this.sponsor.user.name,
                // referral: this.sponsor.user.name,
            })
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
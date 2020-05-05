<template>
    <div>
        <vs-tabs alignment="center">
            <vs-tab label="Profile">
                <div class="vx-col w-full lg:w-1/3">
                    <!-- ABOUT CARD -->
                    <vx-card title="About" class="mt-base">
                        
                        <template slot="actions">
                            <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                        </template>

                        <div class="Full Name">
                            <h6>Full Name:</h6>
                            <p>{{this.sponsorEdit.user.name}}</p> 
                        </div>

                        <div class="mt-5">
                            <h6>Email:</h6>
                            <p>{{this.sponsorEdit.user.email}}</p>  
                        </div>

                        <div class="mt-5">
                            <h6>Phone Number:</h6>
                            <p>{{this.sponsorEdit.phone_number}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>Address:</h6>
                            <p>{{this.sponsorEdit.address || "Edit to add Address"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>City:</h6>
                            <p>{{this.sponsorEdit.city || "Edit to add city"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>State:</h6>
                            <p>{{this.sponsorEdit.state || "Edit to add state"}}</p>
                        </div>

                        <div class="mt-5">
                            <h6>Country:</h6>
                            <p>{{this.sponsorEdit.country || "Edit to add country"}}</p>
                        </div> 

                    </vx-card>
                </div>
            </vs-tab>

            <vs-tab label="Edit">
                <div class="vx-col w-full lg:w-2/4">
                    <form action="">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Full Name" v-model="sponsorEdit.user.name" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Phone Number" v-model="sponsorEdit.phone_number" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="Address" v-model="sponsorEdit.address" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="City" v-model="sponsorEdit.city" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea label="State" v-model="sponsorEdit.state" class="w-full mt-5" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Country" v-model="sponsorEdit.country" class="w-full mt-5" />
                            </div>
                        </div>
                        <vs-button color="success" type="border" @click="profileEdit()">Save</vs-button>
                    </form>
                </div>
            </vs-tab>
        </vs-tabs>
    </div>
</template>

<script>
import {getSponsor, updateSponsor } from  "../../../api/sponsor/sponsor.api";

export default {

    data(){
        return{
            sponsorEdit:{},
            id:''
        }
    },

    created(){
        this.$vs.loading()
        this.id = this.$store.state.user.id;
        getSponsor(this.id)
        .then(res => {
            this.$vs.loading.close()
            this.sponsorEdit = res.data.data;
        })
    },

    methods:{

        profileEdit(){
            this.$vs.loading()
            updateSponsor(this.id, {
                name: this.sponsorEdit.user.name,
                address: this.sponsorEdit.address,
                city: this.sponsorEdit.city,
                state: this.sponsorEdit.state,
                country: this.sponsorEdit.country,
                currency: "",
                medium: "",
                referral: "",
            })
            .then(result => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Edited',text:'Sponsor profile edited successfully',color:'warning',position:'top-right'});
            })
            .catch(err => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
            })
        }
    }
}
</script>
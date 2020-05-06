<template>
    <div>
        <vs-tabs alignment="center">
            <vs-tab label="Profile">
                <!-- <div class="vx-col w-full lg:w-1/3">
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
                </div> -->

                <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base">
                        <vx-card class="p-2">
                            <vs-avatar class="mx-auto mb-6 block" size="80px" src="https://www.bing.com/images/search?view=detailV2&ccid=ydgLdMPR&id=1DC342F26F911C03617CB94E81A96F78345125BA&thid=OIP.XZ0Y8eEx1e7nyYJIO_IfpgHaHa&mediaurl=http%3a%2f%2f4.bp.blogspot.com%2f-zsbDeAUd8aY%2fUS7F0ta5d9I%2fAAAAAAAAEKY%2fUL2AAhHj6J8%2fs1600%2ffacebook-default-no-profile-pic.jpg&exph=1290&expw=1290&q=Facebook+Avatar+Icon&simid=608049184228052981&selectedIndex=3" />
                            <div class="text-center">
                                <h4>{{ this.sponsorEdit.user.name }}</h4>
                                <p class="text-grey">{{ this.sponsorEdit.user.email }}</p>
                            </div>
                            <div class="mb-4 mt-base">
                                <div class="flex justify-between">
                                    <small class="font-semibold">120 points</small>
                                    <small class="text-grey">100</small>
                                </div>
                                <vs-progress percent="80" class="block mt-1 shadow-md"></vs-progress>
                                profile completed
                            </div>
                            
                            <div class="mb-4 mt-base">
                                <div class="text-center">
                                    <small>Profile Details</small>
                                </div>
                            </div>
                            <div class="flex justify-between flex-wrap">
                                <h6>Phone Number:</h6>
                                <p>{{this.sponsorEdit.phone_number}}</p>
                                <vs-divider />
                                <h6>Address:</h6>
                                <p>{{this.sponsorEdit.address || "Edit to add Address"}}</p>
                                <vs-divider />
                                <h6>City:</h6>
                                <p>{{this.sponsorEdit.city || "Edit to add city"}}</p>
                                <vs-divider />
                                <h6>State:</h6>
                                <p>{{this.sponsorEdit.state || "Edit to add state"}}</p>
                                <vs-divider />
                                <h6>Country:</h6>
                                <p>{{this.sponsorEdit.country || "Edit to add country"}}</p>
                                <vs-divider />
                            </div>
                            <!-- <div class="flex justify-between flex-wrap">
                                <vs-button class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_6.btn_left_text }}</vs-button>
                                <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_6.btn_right_text }}</vs-button>
                            </div> -->
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
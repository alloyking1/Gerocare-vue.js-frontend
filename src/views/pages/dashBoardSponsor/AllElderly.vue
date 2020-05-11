<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base" v-for="(item, i) in elderly" :key="i">
				<vx-card :title=item.name @click="viewPatient(item.id)">
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/3 md:w-1/3  mb-base">
                            <vs-chip color="success">Active</vs-chip>
                            <p style="font-size:10px; color:#9DCB47; padding-top:35px">8 Visits left</p>
                        </div>
                        <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base">
                            <vs-avatar  class="mx-auto mb-6 block" size="47px" src="https://www.bing.com/images/search?view=detailV2&ccid=ydgLdMPR&id=1DC342F26F911C03617CB94E81A96F78345125BA&thid=OIP.XZ0Y8eEx1e7nyYJIO_IfpgHaHa&mediaurl=http%3a%2f%2f4.bp.blogspot.com%2f-zsbDeAUd8aY%2fUS7F0ta5d9I%2fAAAAAAAAEKY%2fUL2AAhHj6J8%2fs1600%2ffacebook-default-no-profile-pic.jpg&exph=1290&expw=1290&q=Facebook+Avatar+Icon&simid=608049184228052981&selectedIndex=3" />
                        </div>
                    </div>
                </vx-card>
			</div>
        </div>
        
        <div class="view">
            <vs-popup classContent="popup-example" title="Patient Profile" :active.sync="popupActive2">
                    <vs-tabs alignment="center">
                        <vs-tab label="Profile">
                            <div class="vx-col w-full lg:w-3/3 sm:w-3/3 mb-base">
                                <vx-card class="p-2">
                                    <vs-avatar class="mx-auto mb-6 block" size="80px" src="https://www.bing.com/images/search?view=detailV2&ccid=ydgLdMPR&id=1DC342F26F911C03617CB94E81A96F78345125BA&thid=OIP.XZ0Y8eEx1e7nyYJIO_IfpgHaHa&mediaurl=http%3a%2f%2f4.bp.blogspot.com%2f-zsbDeAUd8aY%2fUS7F0ta5d9I%2fAAAAAAAAEKY%2fUL2AAhHj6J8%2fs1600%2ffacebook-default-no-profile-pic.jpg&exph=1290&expw=1290&q=Facebook+Avatar+Icon&simid=608049184228052981&selectedIndex=3" />
                                    <div class="text-center">
                                        <h4>{{this.singleElderly.name}}</h4>
                                        <p class="text-grey">{{this.singleElderly.phone_number || "Edit profile to add"}}</p>
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
                                        <p>{{this.singleElderly.phone_number || "Edit profile to add"}}</p>
                                        <vs-divider />
                                        <h6>Address:</h6>
                                        <p>{{this.singleElderly.address || "Edit to add Address"}}</p>
                                        <vs-divider />
                                        <h6>City:</h6>
                                        <p>{{this.singleElderly.city || "Edit to add city"}}</p>
                                        <vs-divider />
                                        <h6>State:</h6>
                                        <p>{{this.singleElderly.state || "Edit to add state"}}</p>
                                        <vs-divider />
                                        <h6>Type:</h6>
                                        <p>{{this.singleElderly.type || "Edit to add country"}}</p>
                                        <vs-divider />
                                    </div>
                                    <div class="flex justify-between flex-wrap">
                                        <!-- <vs-button class="mt-4 mr-2 shadow-lg" type="gradient" gradient-color-secondary="#CE9FFC">Edit</vs-button> -->
                                        <vs-button class="w-full mt-6" type="border" color="danger" @click="removePatient(singleElderly.id)">Delete</vs-button>
                                    </div>
                                </vx-card>
                            </div>
                        </vs-tab>
                        
                        <vs-tab label="Edit">
                            <div class="vx-col w-full lg:w-3/3 sm:w-3/3 mb-base" style="margin:0 auto">
                                <vx-card class="p-2" title="Edit Profile">
                                    <form action="">
                                        <vs-divider/>
                                        <div class="vx-row">
                                            <div class="vx-col md:w-2/2 w-full">
                                                <vs-input label="Full Name" v-model="singleElderly.name" class="w-full mt-5" />
                                            </div>
                                            <div class="vx-col md:w-2/2 w-full">
                                                <vs-input label="Address" v-model="singleElderly.address" class="w-full mt-5" />
                                            </div>
                                            <div class="vx-col md:w-2/2 w-full">
                                                <vs-input label="State" v-model="singleElderly.state" class="w-full mt-5" />
                                            </div>
                                            <div class="vx-col md:w-2/2 w-full">
                                                <vs-input label="Phone Number" v-model="singleElderly.phone_number" class="w-full mt-5" />
                                            </div>
                                            <div class="vx-col md:w-2/2 w-full">
                                                <vs-input label="Patient Type" v-model="singleElderly.type" class="w-full mt-5" />
                                            </div>
                                        </div>
                                        <vs-divider/>
                                        <vs-button type="gradient" class="w-full mt-6" @click="edit(singleElderly.id)">Save</vs-button>
                                        
                                    </form>
                                </vx-card>
                            </div>
                        </vs-tab>
                    </vs-tabs>
            </vs-popup>

        </div>
    </div>
</template>

<script>
import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue' 
import {getSponsor} from '../../../api/sponsor/sponsor.api' 
import {findPatient, editPatient, deletePatient, createPatients} from '../../../api/sponsor/patient.api' 

export default {
    data(){
        return{
            elderly:{},
            singleElderly:{},
            colorx:"#4a5153",
            popupActivo5:false,
            popupActive2: false,
            sponsorId:"",
        }
    },

    created(){
        this.sponsorId = this.$store.state.user.id;
        this.fetchPatient();
    },

    methods:{
        fetchPatient(){
            
            this.$vs.loading();
            getSponsor(this.sponsorId)
            .then(res => {
                this.$vs.loading.close();
                this.elderly = res.data.data.patients;
            })
            .catch(err => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'something is wrong. Make sure you are connected to the internet',color:'danger',position:'top-right'});
            })
        },

        removePatient(itemId){
            // this.$vs.dialog({
            //     type: 'confirm',
            //     color: 'danger',
            //     title: `Confirm`,
            //     text: 'Are you sure you want to delete this?',
            //     // accept: this.removePatient(itemId)
            // })

            confirm()

            this.$vs.loading()
            deletePatient(this.sponsorId, itemId)
            .then(res => {
                // this.popupActivo5 = true;
                this.$vs.loading.close()
                this.$vs.notify({title:'Deleted',text:'User deleted successfully',color:'warning',position:'top-right'});
            })
            .catch(err => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
                // console.log(err)
            })

        },

        viewPatient(itemId){
            // this.$vs.loading()
            findPatient(this.sponsorId, itemId)
            .then(res =>{
                this.singleElderly = res.data.data;
                // this.$vs.loading.close()
            })
            .catch(err => {
                // this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
            })

            this.popupActive2=true
        },

        edit(patientId){
            this.$vs.loading()
            editPatient(this.sponsorId, patientId, this.singleElderly)
            .then(res => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Edited',text:'Patient edited successfully',color:'warning',position:'top-right'});
            })
            .catch(err => {
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
            })
        }
    }

}
</script>
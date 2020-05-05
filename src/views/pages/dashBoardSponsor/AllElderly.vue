<template>
    <div>
        <vx-card title="All Request">
            <vs-table :data="elderly">

                <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Address</vs-th>
                <vs-th>State</vs-th>
                <vs-th>City</vs-th>
                <vs-th>Type</vs-th>
                <vs-th>Phone</vs-th>
                <vs-th>Actions</vs-th>
                </template>

                <template slot-scope="{data}">
                    <!-- <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data"> -->
                    <!-- <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    </vs-tr> -->

                    <vs-tr v-for="(item, i) in elderly" :key="i">

                        <vs-td>
                            {{item.name}}
                        </vs-td>
                        <vs-td>
                            {{item.address}}
                        </vs-td>
                        <vs-td>
                            {{item.state}}
                        </vs-td>
                        <vs-td>
                            {{item.city}}
                        </vs-td>
                        <vs-td>
                            {{item.type}}
                        </vs-td>
                        <vs-td>
                            {{item.phone_number}}
                        </vs-td>
                        <vs-td>
                            <vs-button color="success" type="border" @click="viewPatient(item.id)">View</vs-button>
                            <vs-button color="danger" type="border" @click="removePatient(item.id)">Delete</vs-button>
                        </vs-td>
                        <div id="delte">
                            <vs-popup
                                style="color:rgb(255,255,255)"
                                background-color="rgba(255,255,255,.6)"
                                :background-color-popup="colorx" title="Confirm" :active.sync="popupActivo5">
                                <h4>Are you sure you want to delete this patient?</h4>
                                <vs-button color="danger" type="border" @click="removePatient(item.id)">Delete</vs-button>
                            </vs-popup>
                        </div>

                    </vs-tr>
                </template>

            </vs-table>
        </vx-card>
        <div class="view">
            <vs-popup classContent="popup-example" title="Lorem ipsum dolor sit amet" :active.sync="popupActive2">
                    <vs-tabs alignment="center">
                        <vs-tab label="Profile">
                            <div class="vx-col w-full lg:w-1/3">
                                <!-- USER BIO -->
                                <div class="Full Name">
                                    <h6>Full Name:</h6>
                                    <p>{{this.singleElderly.name}}</p> 
                                </div>
                                <div class="Address">
                                    <h6>Address:</h6>
                                    <p>{{this.singleElderly.address}}</p> 
                                </div>
                                <div class="state">
                                    <h6>State:</h6>
                                    <p>{{this.singleElderly.state}}</p> 
                                </div>
                                <div class="phone_number">
                                    <h6>Phone Number:</h6>
                                    <p>{{this.singleElderly.phone_number}}</p> 
                                </div>
                                <div class="type">
                                    <h6>Type:</h6>
                                    <p>{{this.singleElderly.type}}</p> 
                                </div>
                            </div>
                        </vs-tab>
                        
                        <vs-tab label="Edit">
                            <div class="vx-col w-full lg:w-2/4">
                                <form action="">
                                    <div class="vx-row">
                                        <div class="vx-col md:w-1/2 w-full">
                                            <vs-input label="Full Name" v-model="singleElderly.name" class="w-full mt-5" />
                                        </div>
                                        <div class="vx-col md:w-1/2 w-full">
                                            <vs-input label="Address" v-model="singleElderly.address" class="w-full mt-5" />
                                        </div>
                                        <div class="vx-col md:w-1/2 w-full">
                                            <vs-input label="State" v-model="singleElderly.state" class="w-full mt-5" />
                                        </div>
                                        <div class="vx-col md:w-1/2 w-full">
                                            <vs-textarea label="Phone Number" v-model="singleElderly.phone_number" class="w-full mt-5" />
                                        </div>
                                        <div class="vx-col md:w-1/2 w-full">
                                            <vs-input label="Patient Type" v-model="singleElderly.type" class="w-full mt-5" />
                                        </div>
                                    </div>
                                    <vs-button color="success" type="border" @click="edit(singleElderly.id)">Save</vs-button>
                                </form>
                            </div>
                        </vs-tab>
                    </vs-tabs>
            </vs-popup>

        </div>
    </div>
</template>

<script>
import {allPatients} from '../../../api/sponsor/sponsor.api' 
import {deletePatient, findPatient, editPatient} from '../../../api/sponsor/patient.api' 

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
        // this.$vs.loading()
        this.elderly = this.$store.state.sponsor.patients;
        this.sponsorId = this.$store.state.user.id;
        this.$vs.loading.close()
    },

    methods:{
         
        removePatient(itemId){

            confirm();
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
            })

        },

        viewPatient(itemId){
            this.$vs.loading()
            findPatient(this.sponsorId, itemId)
            .then(res =>{
                this.singleElderly = res.data.data;
                this.$vs.loading.close()
            })
            .catch(err => {
                this.$vs.loading.close()
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
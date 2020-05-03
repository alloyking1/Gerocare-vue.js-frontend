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
                <!-- <vs-th>Edit</vs-th>
                <vs-th>Delete</vs-th> -->
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
                          <vs-button color="success" type="border" >View</vs-button>
                          <vs-button color="warning" type="border">Edit</vs-button>
                          <vs-button color="danger" type="border" @click="popupActivo5=true">Delete</vs-button>
                      </vs-td>
                      <div >
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

    </div>
</template>

<script>
import {allPatients} from '../../../api/sponsor/sponsor.api' 
import {deletePatient} from '../../../api/sponsor/patient.api' 

export default {
    data(){
        return{
            elderly:{},
            colorx:"#4a5153",
            popupActivo5:false,
        }
    },

    created(){
        this.elderly = this.$store.state.sponsor.patients;
    },

    methods:{
         
        removePatient(itemId){
            let id =  this.$store.state.user.id;

            deletePatient(id, itemId)
            .then(res => {
                this.popupActivo5 = true;
                this.$vs.notify({title:'Deleted',text:'User deleted successfully',color:'warning',position:'top-right'});
            })
            .catch(err => {
                this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
            })

        }
    }

}
</script>
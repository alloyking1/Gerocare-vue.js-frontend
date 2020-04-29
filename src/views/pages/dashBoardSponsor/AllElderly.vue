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
                          <vs-button color="danger" type="border">Delete</vs-button>
                      </vs-td>

                    </vs-tr>
                </template>

            </vs-table>
        </vx-card>
    </div>
</template>

<script>
import {allPatients} from '../../../api/sponsor/sponsor.api' 

export default {
    data(){
        return{
            elderly:{},
        }
    },

    created(){
        this.elderly = this.$store.state.sponsor.patients;
    }

}
</script>
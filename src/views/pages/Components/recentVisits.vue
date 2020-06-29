<template>
    <div>
        <div>
            <vx-card>
                <vs-table  pagination max-items="3" stripe search :data="appointments">
                    <template slot="header">
                        <h3>
                        Recent Visits
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th sort-key="date">
                        DATE
                        </vs-th>
                        <vs-th sort-key="description">
                        DESCRIPTION
                        </vs-th>
                        <vs-th sort-key="doctor">
                        DOCTOR
                        </vs-th>
                        <vs-th sort-key="patient">
                        PATIENT
                        </vs-th>
                        <vs-th sort-key="status">
                        STATUS
                        </vs-th>
                        <vs-th sort-key="report">
                        REPORT
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                        <vs-td :data="tr.appointment_date">
                            {{moment(tr.appointment_date).format('MM-DD-YYYY')}}
                        </vs-td>

                        <vs-td :data="tr.description">
                            {{tr.description}}
                        </vs-td>

                        <vs-td :data="tr.doctor">
                            {{tr.doctor.name || 'kapasky'}}
                        </vs-td>
                        <vs-td :data="tr.patient">
                            {{tr.patient.name}}
                        </vs-td>
                        <vs-td :data="tr.status">
                            {{tr.status}}
                        </vs-td>
                        <vs-td :data="tr.report">
                            <vs-button size="small" @click="fetchEachAppointment(tr.id)">View</vs-button>
                        </vs-td>
                        </vs-tr>
                    </template>


                </vs-table>
            </vx-card>
        </div>

        <div class="view">
            <vs-popup
                classContent="popup-example"
                title="Medical Request"
                :active.sync="popupActive">
                
                <!-- <h1>{{eachVisit}}</h1> -->
                <popUpInner :data='eachVisit'></popUpInner>
                

            </vs-popup>
            </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import popUpInner from './popUpInner'
export default {
    data(){
        return {
            popupActive: false,
            eachVisit:{}
        }
    },
    
    computed:{
        ...mapState(['appointments']),
    },

    methods:{
        fetchEachAppointment(id){
            const res = this.$store.getters.getAppointmentById(id)
            this.eachVisit = res
            this.popupActive = true;
        }
    },
    components:{
        popUpInner
    }
}
</script>
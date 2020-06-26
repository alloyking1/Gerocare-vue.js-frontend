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
                            <vs-button size="small">View</vs-button>
                        </vs-td>
                        </vs-tr>
                    </template>


                </vs-table>
            </vx-card>
            
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    
    computed:{
        ...mapState(['appointments'])
    },
}
</script>
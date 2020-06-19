<template>
    <div>
        <div>
            <vx-card>
                <vs-table  pagination max-items="3" stripe search :data="users">
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
                        <vs-td :data="data[indextr].appointment_date">
                            {{moment(data[indextr].appointment_date).format('MM-DD-YYYY')}}
                        </vs-td>

                        <vs-td :data="data[indextr].description">
                            {{data[indextr].description}}
                        </vs-td>

                        <vs-td :data="data[indextr].doctor">
                            {{data[indextr].doctor.name || 'kapasky'}}
                        </vs-td>
                        <vs-td :data="data[indextr].patient">
                            {{data[indextr].patient.name}}
                        </vs-td>
                        <vs-td :data="data[indextr].status">
                            {{data[indextr].status}}
                        </vs-td>
                        <vs-td :data="data[indextr].report">
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

export default {
    data(){
        return{
            users:[]
        }
    },

    methods:{
        async fetchAppointments(){
            this.$vs.loading()
            try{
                const data = {}
                data.id = this.$store.state.user.user.id
                const res = await this.$store.dispatch('fetchRecentVisit', data)
                this.users = res.data.data
                this.$vs.loading.close()
            }catch{
                this.$vs.loading.close()
                this.$vs.notify({title:'Error',text:'Could not load Appointments. Make sure you are connected to the internet',color:'danger',position:'top-right'})
                this.$vs.loading.close()
            }
        },
    },


    created(){
        
        this.fetchAppointments()
        
    },

}
</script>
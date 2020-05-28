<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="User Complaints/Feedbacks">
                    <small class="mb-5">Hi</small>
                    <br>
                    <small class="mb-5">Please take a few minutes to let us know about your complaints or give us feedback about our service. We appreciate you.</small>
                    <form onsubmit="return false">

						<div class="vx-col md:w-2/2 w-full mt-5">
                            <vs-input label="Subject" v-model="complaint.subject" class="w-full" />
                        </div>

                        <div class="vx-col md:w-2/2 w-full mt-5">
                            <vs-textarea v-model="complaint.comment" label="Height set to 200px" height="200px"/>
                        </div>
                        <div class="vx-col md:w-2/2 w-full mt-5 mb-5">
                            <span class="text-danger text-sm">{{error}}</span>
                        </div>


                        <vs-button @click="send" icon-pack="feather"  class="shadow-md w-full cutomBtn">SUBMIT FEEDBACK</vs-button>
                    </form>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base" id="div-with-loadingt">

                <vx-card>
                    <vs-table  pagination max-items="3" stripe search :data="users">
                        <template slot="header">
                            <h3>
                            Completed Medical Request
                            </h3>
                        </template>
                        <template slot="thead">
                            <vs-th sort-key="date_created">
                            DATE
                            </vs-th>
                            <vs-th sort-key="message">
                            MESSAGE
                            </vs-th>
                            <vs-th sort-key="subject">
                            SUBJECT
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
                            <vs-td :data="data[indextr].date_created">
                                {{data[indextr].date_created}}
                            </vs-td>

                            <vs-td :data="data[indextr].message">
                                {{data[indextr].comment}}
                            </vs-td>

                            <vs-td :data="data[indextr].subject">
                                {{data[indextr].subject}}
                            </vs-td>
                            <vs-td :data="data[indextr].status">
                                {{data[indextr].role}}
                            </vs-td>
                            <vs-td :data="data[indextr].report">
                                {{data[indextr].report}}
                            </vs-td>
                            </vs-tr>
                        </template>


                    </vs-table>
                </vx-card>
                <br>
                <!-- <vx-card title="All Complaints">
                    <vs-collapse  :type="type" v-for="(each, complaint) in allComplaint" :key="complaint" >
                        <vs-collapse-item >
                            <div slot="header">
                                {{each.subject}}
                            </div>
                            {{each.comment}}
                        </vs-collapse-item>

                    </vs-collapse>
			    </vx-card> -->
            </div>
		</div>
    </div>
</template>

<script>
import {createComplaint, getComplaint} from '../../../api/sponsor/complaint.api'

export default {
    data(){
        return{
            complaint:{
                subject:"",
                comment:""
            },
            error:"",
            users:[]
        }
    },

    created(){
        this.fetchComplaint();
    },

    methods:{
        send(){
            if(this.complaint.subject === "" || this.complaint.comment === ""){
                this.error = "All fields are required"
            }else{
                // get user id form state
                this.$vs.loading()
                let userId = this.$store.state.user.id;
                createComplaint(userId, this.complaint)
                .then(res => {
                    this.$vs.loading.close()
                    this.$vs.notify({title:'Complaint sent successful',text:'We will get back to you shortly',color:'warning',position:'top-right'});
                })
                .catch(err => {
                    this.$vs.loading.close()
                    this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
                })
            }
        },

        fetchComplaint(){
            this.$vs.loading()

            let id = this.$store.state.user.user.id
            getComplaint(id).
            then(res => {
                this.users = res.data.data;
                console.log(res.data.data);
                this.$vs.loading.close()
            })
        }
    }
}
</script>

<style>
    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

</style>
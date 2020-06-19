<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="User Complaints/Feedbacks">
                    <small class="mb-5">Hi</small>
                    <br>
                    <small class="mb-5">Please take a few minutes to let us know about your complaints or give us feedback about our service. We appreciate you.</small>


                    <ValidationObserver ref="firstForm">
                        <form onsubmit="return false">
                            <div class="vx-col md:w-2/2 w-full mt-5">
                                <ValidationProvider  name="Topic" rules="required" v-slot="{ errors }">
                                    <vs-input label="Subject" v-model="complaint.subject" class="w-full" />
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div class="vx-col md:w-2/2 w-full mt-5">
                                <ValidationProvider  name="Complaint" rules="required" v-slot="{ errors }">
                                    <vs-textarea v-model="complaint.comment" label="Height set to 200px" height="200px"/>
                                    <span>{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <vs-button @click="send" icon-pack="feather"  class="shadow-md w-full cutomBtn">SUBMIT FEEDBACK</vs-button>
                        </form>
                    </ValidationObserver>

                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base" id="div-with-loadingt">

                <!-- <vx-card>
                    <vs-table  pagination max-items="3" stripe search :data="users">
                        <template slot="header">
                            <h3>
                            Complaint/Feedback
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
                </vx-card> -->
            </div>
		</div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
    data(){
        return{
            complaint:{
                role:3 //role of sponsor
            },
        }
    },

    methods:{

        async send(){
            if(await this.$refs.firstForm.validate() === true){
                const data={
                    id:this.$store.state.user.sponsor.id,
                    data:this.complaint,
                }
                try{
                    const res = await this.$store.dispatch('createComplaint', data)
                    console.log(res)
                }catch(e){
                    console.log(e)
                }
            }else{
                return false
            }

        },

    },

    components:{
        ValidationProvider, 
        ValidationObserver
    }
}
</script>

<style>
    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

</style>
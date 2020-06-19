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
                <complaintList></complaintList>
            </div>
		</div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import complaintList from '../Components/allComplaints'

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
                    await this.$store.dispatch('createComplaint', data)
                    this.$vs.notify({title:'Complaint sent successful',text:'We will get back to you shortly',color:'warning',position:'top-right'})
                }catch(e){
                    this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'})
                }
            }else{
                return false
            }

        },

    },

    components:{
        ValidationProvider, 
        ValidationObserver,
        complaintList
    }
}
</script>

<style>
    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

</style>
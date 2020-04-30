<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="User Complaints/Feedbacks">
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


                        <vs-button @click="send" icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Send</vs-button>
                    </form>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="All Complaints">
                    <vs-collapse>

                        <vs-collapse-item>
                            <div slot="header">
                                Collapse item
                            </div>
                            Lorem....metus.
                        </vs-collapse-item>

                        <vs-collapse-item>
                        <div slot="header">
                            Collapse item 2
                        </div>
                        Nunc....maximus.
                        </vs-collapse-item>

                        <vs-collapse-item disabled>
                        <div slot="header">
                            Collapse item 3 - Disabled
                        </div>
                        Suspendisse....eu
                        </vs-collapse-item>

                        <vs-collapse-item>
                        <div slot="header">
                            Collapse item 4
                        </div>
                        Suspendisse....finibus.
                        </vs-collapse-item>
                    </vs-collapse>
			    </vx-card>
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
            appointmentData: [
                {
                color : 'primary',
                icon  : 'PlusIcon',
                title : 'New Task Added',
                desc  : 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
                time  : '25 Days Ago'
                },
                {
                color : 'warning',
                icon  : 'AlertCircleIcon',
                title : 'Task Update Found',
                desc  : 'Cupcake gummi bears soufflé caramels candy',
                time  : '15 Days Ago'
                },
                {
                color : 'success',
                icon  : 'CheckIcon',
                title : 'Task Finished',
                desc  : 'Candy ice cream cake. Halvah gummi bears',
                time  : '20 mins ago'
                }
            ],
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
                let userId = this.$store.state.user.id;
                createComplaint(userId, this.complaint)
                .then(res => {
                    
                    this.$vs.notify({title:'Complaint sent successful',text:'We will get back to you shortly',color:'warning',position:'top-right'});
                })
                .catch(err => {
                    
                    this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
                })
            }
        },

        fetchComplaint(){
            getComplaint().then(res => {
                console.log(res);
            })
        }
    }
}
</script>
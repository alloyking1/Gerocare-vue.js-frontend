<template>
	<div class="vx-row">
        <!-- ACTIVITY TIMELINE -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
            <vx-card title="Recent Appointments">
                <!-- output appointments -->
                <vx-timeline :data="appointmentData"></vx-timeline>
            </vx-card>
        </div>

		<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
			<vx-card title="All Appointments">
				<!-- <div class="demo-alignment">
                    <vs-radio v-model="type" vs-value="default">Default</vs-radio>
                    <vs-radio v-model="type" vs-value="shadow">Shadow</vs-radio>
                    <vs-radio v-model="type" vs-value="border">Border</vs-radio>
                    <vs-radio v-model="type" vs-value="margin">Margin</vs-radio>
                </div> -->

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
		<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<vx-card title="Number of Visits">
				tesint
			</vx-card>
		</div>
	</div>
</template>

<script>
import VxTimeline from '@/components/timeline/VxTimeline.vue'
import {getSponsorAppointment} from '../../../api/sponsor/sponsor.api'

export default {
    data(){
        return{
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
            type: 'margin',
        }
    },

    created(){
        var sponsorId = this.$store.state.user.id;
        getSponsorAppointment(sponsorId)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error)
        })
    },
    
    components: {
        VxTimeline
    },
}
</script>
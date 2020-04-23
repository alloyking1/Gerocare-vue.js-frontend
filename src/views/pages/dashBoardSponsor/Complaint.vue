<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="User Complaints/Feedbacks">
                    <small class="mb-5">Please take a few minutes to let us know about your complaints or give us feedback about our service. We appreciate you.</small>
                    <form action="">

                        <vs-select v-model="city" class="w-full select-large mb-5 mt-5">
                            <vs-select-item text="Subject" class="w-full" />
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in subjects" class="w-full" />
                        </vs-select>
                        <vs-textarea v-model="textarea" label="Height set to 200px" height="200px" />
                        
                        <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Send</vs-button>
                    </form>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card style="padding:2.5rem">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <div class="text-center">
                                <h1>
                                  <span>All Complaints/Feedback</span>
                                </h1>
                                <br>
                                <small>
                                  <span class="text-grey">Previous Complaints/Feedbakc </span>
                                </small>
                            </div>
                            <div>
                            <vs-table :data="users">

                                <template slot="thead">
                                <vs-th>Date</vs-th>
                                <vs-th>Type</vs-th>
                                <vs-th>For</vs-th>
                                <vs-th>Amount</vs-th>
                                <vs-th>Status</vs-th>
                                <vs-th>Date</vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data">

                                        <vs-td :data="data[indextr].email">
                                        {{ data[indextr].email }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].username">
                                        {{ data[indextr].name }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].id">
                                        {{ data[indextr].website }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].id">
                                        {{ data[indextr].id }}
                                        </vs-td>
                                    </vs-tr>
                                </template>

                            </vs-table>
                            </div>
                            <br>
                        </div>
                        
                    </template>
                </vx-card>
            </div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            subjects:[
                {text:'this is the first subject', value:'text-val'}
            ],
        }
    }
}
</script>
<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/3 md:w-1/3 mb-base">
                <vx-card title="" class="p-2">
                    <div class="container pl-5 pr-5 pt-5">
                        <h3 class="p-1">New Subscription</h3>
                        <vs-select v-model="city" @change="seletedElderly" class="w-full select-large mb-5">
                            <vs-select-item text="Select Elderly" class="w-full" />
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                        </vs-select>
                        <div class="container" v-if="elderly">
                            <h6 class="p-100 name-heading">Name: <span class="name-inner">Alloy king1</span> </h6>
                            <h6 class="p-100 name-heading">Status: <span class="name-inner">Active</span> </h6>
                            <h6 class="p-100 name-heading">Plan: <span class="name-inner">Basic Home Visit</span> </h6>
                            <vs-divider></vs-divider>
                        </div>
                    </div>

                    <div class="add-form">
                        <h3 class="text-center pb-5 text-1xl">Add Subscription</h3>
                        <form action="">
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="Basic Home Visit" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="1 visit / Month" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>
                            <vs-select v-model="city" class="w-full select-large mb-2">
                                <vs-select-item text="3 Months" class="w-full" />
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                            </vs-select>

                            <div class="text-center visits p-3">
                                <h6 class="p-2">AMOUNT</h6>
                                <h2 class="p-2 text-5xl"> N 18,900</h2>
                                <p class="p-2">1 visit every month for 3 months</p>
                                <vs-radio color="success" v-model="radios2" vs-value="Success">Pay Now</vs-radio>
                                <vs-radio style="margin-left:10px;" color="success" v-model="radios2" vs-value="Success">Pay Later</vs-radio>
                            </div>
                            
                            <vs-button icon-pack="feather" class="shadow-md w-full cutomBtn">CONFIRM</vs-button>
                        </form>
                    </div>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base">
                <vx-card style="padding:2.5rem">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <vs-table  pagination max-items="3" stripe search :data="users">
                                <template slot="header">
                                    <h3>
                                    Subscription
                                    </h3>
                                </template>
                                <template slot="thead">
                                    <vs-th sort-key="email">
                                    Date
                                    </vs-th>
                                    <vs-th sort-key="username">
                                    Type
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    For
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Amount
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Status
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Due Date
                                    </vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                                    <vs-td :data="data[indextr].email">
                                        {{data[indextr].email}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].username">
                                        {{data[indextr].username}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].id">
                                        {{data[indextr].id}}
                                    </vs-td>
                                    </vs-tr>
                                </template>


                            </vs-table>
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
        return {
            // cityOptions: [
            //     {text: "New York", value:"new-york"},
            //     {text: "Chicago", value:"chicago"},
            //     {text: "San Francisco", value:"san-francisco"},
            //     {text: "Boston", value:"boston"},
            // ],
            // color:'#5a3cc4',
            // switch1:true,
            // switch2:true,

            users:[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
            ]
        }
    },

    methods:{
        visitCost(){

			let visits = this.paymentDetails.visit;
			let months = this.paymentDetails.months;
			let amount = 6500;

			let cost = visits * 6500;
			let total = cost * months;
			this.visitCostSum = total;
		
		},
    }
}
</script>

<style scoped>
    .p-100{
        padding:0.5rem;
    }
    .name-inner{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        margin-left: 30px;

        color: #808495;

    }
    .name-heading{
        /* font-family: Roboto; */
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        color: #000000;
    }
    .add-form{
        top: 323px;
        border-radius: 5px;
        padding: 1.5rem;
    }

    .visits{
        line-height: 30px;
    }

    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

</style>
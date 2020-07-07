<template>
    <div>
        <div class="vx-row">
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <!-- <div class="mb-2">
                    <h5>Payment Detials</h5>
                </div> -->
                <vx-card class="mb-2 bg-primary-gradient greet-user">
                    <div class="flex justify-between flex-wrap p-1">
                        <span class="card-span">Debit Card</span>
                        <span class="card-span">Update</span>
                    </div>

                    <div class="flex justify-around p-2">
                        <svg width="53" height="30" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#E65252"/>
                            <circle cx="38" cy="15" r="15" fill="#E9BA15"/>
                        </svg>
                        <p>XXXX - XXXX - XXXX - 3456</p>
                    </div>
                    <div class="text-left card-span p-3 pl-5 ml-5">
                        <p>MasterCard - Expires 05/21</p>
                        <p>Billed on the first of every month</p>
                        <p>Next billing due July 01,2019</p>
                    </div>

                </vx-card>


                <div class="mt-5 pb-3">
                    <h3>Pending Bills</h3>
                </div>
                <vx-card>
                    <div class="flex justify-between flex-wrap">
                        <p class="billing-text">Billings</p>
                        <p class="billing-inner">N6,000</p>
                        <vs-divider />
                        <p class="billing-text">Drugs</p>
                        <p class="billing-inner">N6,000</p>
                        <vs-divider />
                    </div>
                </vx-card>
                <div class="footer p-1">
                    <div class="flex justify-between flex-wrap p-1">
                        <vs-button class="cutomBtn" style="background-color: #FFFFFF !important; color:#3F9955;" type="filled">Fund Wallet</vs-button>
                        <vs-button type="filled" class="cutomBtn" style="background-color: #9DCB47 !important; color:#FFFFFF">Pay Now</vs-button>
                    </div>
                </div>
			</div>

            <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base">
                <vx-card>
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <vs-table  pagination max-items="3" stripe search :data="transactions">
                                <template slot="header">
                                    <h3>
                                    Billings
                                    </h3>
                                </template>
                                <template slot="thead">
                                    <vs-th sort-key="date">
                                    Date
                                    </vs-th>
                                    <vs-th sort-key="type">
                                    Type
                                    </vs-th>
                                    <vs-th sort-key="name">
                                    For
                                    </vs-th>
                                    <vs-th sort-key="amount">
                                    Amount
                                    </vs-th>
                                    <vs-th sort-key="status">
                                    Status
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    More
                                    </vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                                    <vs-td :data="data[indextr].date">
                                        {{tr.created_at}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].type">
                                        {{tr.service.description || "Null"}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].name">
                                        {{tr.patient.name || "..."}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].amount">
                                        {{tr.pay_amount || "..."}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].status">
                                        {{tr.service.status || "..."}}
                                    </vs-td>

                                    <vs-td :data="data[indextr].status">
                                        <vs-button size="small" @click="getPayment(tr.id)">View</vs-button>
                                    </vs-td>
                                    </vs-tr>


                                </template>


                            </vs-table>
                        </div>
                                
                    </template>
                </vx-card>
            </div>

            <div>
                <vs-popup
                classContent="popup-example"
                title="Medical Request"
                :active.sync="popupActive">
                    <popupInnerReuse :data="paymentId"></popupInnerReuse>
                </vs-popup>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import popupInnerReuse from '../Components/popupInnderReuse'

export default {
    data(){
        return{
            popupActive:false,
            paymentId:''
        }
    },
    computed:{
        ...mapState({
            transactions: state => state.transaction
        })
    },

    methods:{
        getPayment(id){
            this.popupActive = true
            this.paymentId = id
        }
    },

    components:{
        popupInnerReuse
    }
}
</script>

<style>
    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }

    .footer{
        background-color:#3F9955;
    }

    .billing-inner{
        color:#E65252;
        font-size: 12px;
    }

    .billing-text{
        font-size: 12px;
    }

    .card-span{
        color:#FFFFFF;
    }

</style>
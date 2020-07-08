<template>
    <div>
        <div class="vx-row">
			
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <creditCard v-for="(card, i) in creditCard.data" :card="card" :key="i"></creditCard>


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
                                        {{moment(tr.created_at).format('MM-DD-YYYY')}}
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
                    <popupInnerBilling :data="singleBilling"></popupInnerBilling>
                </vs-popup>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import popupInnerBilling from '../Components/popupInnderBilling'
import creditCard from '../Components/creditCard'

export default {
    data(){
        return{
            popupActive:false,
            singleBilling:''
        }
    },
    computed:{
        ...mapState({
            transactions: state => state.transaction,
            creditCard: state => state.card
        })
    },

    methods:{
        getPayment(id){
            const billingDetail = this.$store.getters.getBillingById(id)
            this.singleBilling = billingDetail
            this.popupActive = true
        }
    },

    components:{
        popupInnerBilling,
        creditCard    
    },
    created(){
        console.log(this.creditCard);
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
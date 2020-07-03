<template>
    <div>
        <div class="vx-row">

            <div class="vx-col w-full sm:w-3/3 md:w-3/3 mb-base">
                <vx-card style="padding:2.5rem">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <vs-table  pagination max-items="3" stripe search :data="subscriptions">
                            <!-- <vs-table  pagination max-items="3" stripe search :data="subByName"> -->
                                <template slot="header">
                                    <h3>
                                    Subscription
                                    </h3>
                                </template>
                                <template slot="thead">
                                    <vs-th sort-key="email">
                                    Date
                                    </vs-th>
                                    <vs-th sort-key="type">
                                    Type
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    For
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Visit Count(s)
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Status
                                    </vs-th>
                                    <vs-th sort-key="id">
                                    Due Date
                                    </vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :key="indextr" v-for="(subscription, indextr) in data" >
                                    <vs-td :data="subscription.created_at">
                                        {{moment(subscription.created_at).format('MM-DD-YYYY')}}
                                    </vs-td>
                                    <vs-td :data="subscription.description">
                                        {{subscription.description}}
                                    </vs-td>

                                    <vs-td :data="subscription.patient? subscription.patient.name: ''">
                                            {{subscription.patient ? subscription.patient.name : ''}}
                                    </vs-td>

                                    <vs-td :data="subscription.visit_count">
                                        {{subscription.visit_count}}
                                    </vs-td>

                                    <vs-td :data="subscription.status" class="product-order-status">
                                        <vs-chip :color="getOrderStatusColor(subscription.status)" class="product-order-status">{{ subscription.status || "Null" }}</vs-chip>
                                        <!-- <vs-chip color="warning" class="product-order-status">{{subscription.status || "Null"}}</vs-chip> -->
                                    </vs-td>

                                    <vs-td :data="subscription.created_at">
                                        {{moment(subscription.created_at).format('DD-MM-YYYY')}}
                                    </vs-td>
                                    </vs-tr>
                                </template>

                            </vs-table>
                            
                                <!-- {{this.serviceList}} -->
                                <vs-button size="small" @click="filterTable(serviceList)">View</vs-button>
                        </div>
                                
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>


<script>

import {  mapState } from 'vuex'
export default {
    props:['serviceList'],

    computed:{
        ...mapState(['subscriptions'])
    },

    methods:{
        getOrderStatusColor (status) {
            if (status === 'on_hold')   return 'warning'
            if (status === 'PATIENT') return 'success'
            if (status === 'canceled')  return 'danger'
            return 'warning'
        },

        async filterTable(service){
            console.log(service)
            await this.$store.getters.getServiceByName(service.name)
        }
    },

    mounted(){
        // this.filterTable(this.serviceList)

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
<template>
    <div>
      <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base" id="div-with-loadingt">
        <vx-card title="Patients Prescriptions">
  
            <vs-collapse  :type="type" v-for="(item, i) in elderly" :key="i" >
                <vs-collapse-item  >
                    <div slot="header" v-if="item.patient">
                        <vs-list>
                          <vs-list-header :title="item.patient.name" color="success"></vs-list-header>
                            <vs-list-item title="Prescription" :subtitle="item.description">
                              <vs-chip color="warning">Date:{{item.visit_date}}</vs-chip>
                            </vs-list-item>
                        </vs-list>
                    </div>
                    <div slot="header" v-else>
                        <vs-list>
                          <vs-list-header title="Patient name not provided" color="success"></vs-list-header>
                            <vs-list-item title="Prescription" :subtitle="item.description">
                              <vs-chip color="warning">Date:{{item.visit_date}}</vs-chip>
                            </vs-list-item>
                        </vs-list>
                    </div>
                    <div class="vx-col w-full mb-base" style="margin:0 auto">
                      <!-- <vx-card class="p-2"> -->
                          <vs-avatar v-if="item.patient" class="mx-auto mb-6 block" size="80px" :src="item.patient.avatar" />
                          <div class="text-center" v-if="item.patient">
                              <h4>{{item.patient.name}}</h4>
                              <p class="text-grey">{{item.patient.phone_number}}</p>
                          </div>
                          <div class="text-center" v-else>
                              <h4>Null</h4>
                              <p class="text-grey">Null</p>
                          </div>
                          <div class="mb-4 mt-base">
                              <div class="flex justify-between">
                                  <small class="font-semibold">Status</small>
                                  <small class="text-grey">100</small>
                              </div>
                              <vs-progress percent="20%" class="block mt-1 shadow-md"></vs-progress>
                          </div>
                          
                          <div class="mb-4 mt-base">
                              <div class="text-center">
                                  <small>Prescription Details</small>
                              </div>
                          </div>
                          <div class="flex justify-between flex-wrap">
                              <h6>Ref:</h6>
                              <p>{{item.reference}}</p>
                              <vs-divider />
                              <h6>visit date:</h6>
                              <p>{{item.visit_date}}</p>
                              <vs-divider />
                              <h6>Amount:</h6>
                              <p>{{item.amount}}</p>
                              <vs-divider />
                              <h6>Description:</h6>
                              <p>{{item.description|| "No description"}}</p>
                              <vs-divider />
                              <h6>type:</h6>
                              <p>{{item.type}}</p>
                              <vs-divider />
                              <h6>vendor comment:</h6>
                              <p>{{item.vendor_comment}}</p>
                              <vs-divider />
                          </div>
                          <div class="flex justify-between flex-wrap">
                              <vs-button class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">dfsdf</vs-button>
                              <vs-button class="mt-4" type="border" color="#b9b9b9">kjflkkl</vs-button>
                          </div>
                      <!-- </vx-card> -->
                    </div>
                </vs-collapse-item>

            </vs-collapse>
        </vx-card>
      </div>

    </div>
</template>

<script>
import {getSponsorPrescription} from '../../../api/sponsor/sponsor.api' 

export default {
  data() {
    return {
      elderly:{},
      sponsorId:"",
      popupActive2: false,
      type:"margin",
      percent:"%",
    }
  },

  created(){
    this.sponsorId = this.$store.state.user.id;
    this.getPrescription();
  },

  methods:{
    getPrescription(){
      this.$vs.loading();
      getSponsorPrescription(this.sponsorId)
      .then(res => {
        this.$vs.loading.close();
        this.elderly = res.data.data;
        console.log(this.elderly);
      })
      .catch(err => {
        this.$vs.loading.close();
        this.$vs.notify({title:'Error',text:'Could not load prescriptions. Make sure you are connected to the internet',color:'danger',position:'top-right'});
        console.log(res);
      })
    },

    loadMore(){
      this.popupActive2 = true;
    }
  }
}
</script>
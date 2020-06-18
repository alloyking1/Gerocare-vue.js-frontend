<template>
    <div>
      <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base" id="div-with-loadingt">
          <vx-card title="Medical Request">
              <vs-table  pagination max-items="3" stripe search :data="users">
                  <template slot="header">
                      <h3>
                      Pending Medical Request
                      </h3>
                  </template>
                  <template slot="thead">
                      <vs-th sort-key="email">
                      Ref
                      </vs-th>
                      <vs-th sort-key="username">
                      Type
                      </vs-th>
                      <vs-th sort-key="id">
                      Description
                      </vs-th>
                      <vs-th sort-key="id">
                      Vendor
                      </vs-th>
                      <vs-th sort-key="id">
                      Amount
                      </vs-th>
                      <vs-th sort-key="id">
                      Action
                      </vs-th>
                  </template>

                  <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                        <vs-td :data="data[indextr].reference">
                            {{data[indextr].reference}}
                        </vs-td>

                        <vs-td :data="data[indextr].type">
                            {{data[indextr].type}}
                        </vs-td>

                        <vs-td :data="data[indextr].description">
                            {{data[indextr].description}}
                        </vs-td>
                        
                        <vs-td :data="data[indextr].vendor_comment">
                            {{data[indextr].vendor_comment}}
                        </vs-td>

                        <vs-td :data="data[indextr].amount">
                            {{data[indextr].amount}}
                        </vs-td>

                        <vs-td :data="data[indextr].amount">
                            <vs-button size="small">view</vs-button>
                        </vs-td>
                      </vs-tr>
                  </template>


              </vs-table>
          </vx-card>
          <br>
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

      users:[],
    }
  },

  created(){
    this.sponsorId = this.$store.state.user.id;
    this.getPrescription();
  },

  methods:{
    async getPrescription(){
      this.$vs.loading();
      
      try{
        this.$vs.loading.close()
        const res = await getSponsorPrescription(this.sponsorId)
        this.users = res.data.data
        this.$vs.loading.close();
      }catch{
        this.$vs.loading.close();
        this.$vs.notify({title:'Error',text:'Could not load prescriptions. Make sure you are connected to the internet',color:'danger',position:'top-right'});
      }
      
    },

    loadMore(){
      this.popupActive2 = true;
    }
  }
}
</script>
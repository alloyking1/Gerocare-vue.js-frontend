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
                      view
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

      users:[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },]
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
        // this.elderly = res.data.data;
        console.log(res.data.data);
        this.users = res.data.data;
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
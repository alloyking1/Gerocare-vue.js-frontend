<template>
  <div>
    <div
      class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base"
      id="div-with-loadingt"
    >
      <vx-card title="Medical Request">
        <vs-table pagination max-items="3" stripe search :data="medical_requests">
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

          <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].reference">
                {{ data[indextr].reference }}
              </vs-td>

              <vs-td :data="data[indextr].type">
                {{ data[indextr].type }}
              </vs-td>

              <vs-td :data="data[indextr].description">
                {{ truncate(data[indextr].description, 25, " ...") }}
              </vs-td>

              <vs-td :data="data[indextr].vendor_comment">
                {{ data[indextr].vendor_comment }}
              </vs-td>

              <vs-td :data="data[indextr].amount">
                {{ data[indextr].amount }}
              </vs-td>

              <vs-td :data="data[indextr].amount">
                <vs-button size="small" @click="more(tr.id)">View</vs-button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vx-card>
      <br />
    </div>

    <div class="view">
      <vs-popup
        classContent="popup-example"
        title="Medical Request"
        :active.sync="popupActive2"
      >
        <vs-tabs alignment="center">
          <vs-tab label="">
            <div class="vx-col w-full lg:w-3/3 sm:w-3/3 mb-base">
              <vx-card class="p-2">
                <div class="text-center p-5" style="padding:2rem !important">
                  <h3 class="text-3xl p-2">Full Details</h3>
                </div>

                <div class="flex justify-between flex-wrap">
                  <h6>Refference:</h6>
                  <p>{{ this.singleRequest.reference }}</p>
                  <vs-divider />
                  <h6>Type:</h6>
                  <p>{{ this.singleRequest.type }}</p>
                  <vs-divider />
                  <h6>Description:</h6>
                  <p>{{ this.singleRequest.description }}</p>
                  <vs-divider />
                  <h6>Comment:</h6>
                  <p>{{ this.singleRequest.vendor_comment }}</p>
                  <vs-divider />
                  <h6>Amount:</h6>
                  <p>{{ this.singleRequest.amount }}</p>
                  <vs-divider />
                </div>
                <div class="flex justify-between flex-wrap">
                  <vs-button
                    class="w-full mt-6 cutomBtn"
                    style="background: #E65252 !important; border-radius:55px;"
                    @click=""
                    >Delete</vs-button
                  >
                </div>
              </vx-card>
            </div>
          </vs-tab>
        </vs-tabs>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import helper from "../../../helpers/helper";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      elderly: {},
      sponsorId: "",
      popupActive2: false,
      users: [],
      singleRequest: {}
    };
  },

  computed:{
    ...mapState(['medical_requests'])
  },

  // created() {
  //   this.sponsorId = this.$store.state.user.user.id;
  //   this.getPrescription();
  // },

  methods: {
    // async getPrescription() {
    //   this.$vs.loading();

    //   try {
    //     this.$vs.loading.close();
    //     let data = {};
    //     data.id = this.sponsorId;
    //     const res = await this.$store.dispatch("fetchMedRequest", data);
    //     this.users = res.data.data;
    //     this.$vs.loading.close();
    //   } catch {
    //     this.$vs.loading.close();
    //     this.$vs.notify({
    //       title: "Error",
    //       text:
    //         "Could not load prescriptions. Make sure you are connected to the internet",
    //       color: "danger",
    //       position: "top-right"
    //     });
    //   }
    // },

    async more(id) {
      try {
        const res = await this.$store.getters.getMedRequestById(id);
        this.singleRequest = res;
        this.popupActive2 = true;
      } catch {
        this.$vs.notify({
          title: "Error",
          text:
            "Could not load prescription, make sure you are still logged in",
          color: "danger",
          position: "top-right"
        });
      }
    },

    truncate(text, length, suffix) {
      // if (text.length > length) {
      //     return text.substring(0, length) + suffix;
      // } else {
      //     return text;
      // }
      return helper.textPrefix(text, length, suffix);
    }
  }
};
</script>

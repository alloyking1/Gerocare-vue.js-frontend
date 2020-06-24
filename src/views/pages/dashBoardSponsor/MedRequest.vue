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
              Amount
            </vs-th>
            <vs-th sort-key="id">
              Action
            </vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(medical_request, indextr) in data">
              <vs-td :data="medical_request.reference">
                {{ medical_request.reference }}
              </vs-td>

              <vs-td :data="medical_request.type">
                {{ medical_request.type }}
              </vs-td>

              <vs-td :data="medical_request.description">
                {{ truncate(medical_request.description, 25, ' ...') }}
              </vs-td>
              <vs-td :data="medical_request.amount">
                {{ medical_request.amount }}
              </vs-td>

              <vs-td :data="medical_request.amount">
                <vs-button size="small" @click="more(medical_request.id)">View</vs-button>
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
                  <p>{{ singleRequest.reference }}</p>
                  <vs-divider />
                  <h6>Type:</h6>
                  <p>{{ singleRequest.type }}</p>
                  <vs-divider />
                  <h6>Description:</h6>
                  <p>{{ singleRequest.description }}</p>
                  <vs-divider />
                  <h6>Comment:</h6>
                  <p>{{ singleRequest.vendor_comment }}</p>
                  <vs-divider />
                  <h6>Amount:</h6>
                  <p>{{ singleRequest.amount }}</p>
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
      popupActive2: false,
      singleRequest: {},
    };
  },

  computed:{
    ...mapState(['medical_requests']),
  },

  methods: {
   
    async more(id) {
        const res = await this.$store.getters.getMedRequestById(id);
        this.singleRequest = res;
        this.popupActive2 = true;
    },

    truncate(text, length, suffix) {
      return helper.textPrefix(text, length, suffix);
    }
  }
};
</script>

<template>
  <div>
    <vx-card>
      <vs-table pagination max-items="3" stripe search :data="complaint">
        <template slot="header">
          <h3>
            Complaint/Feedback
          </h3>
        </template>
        <template slot="thead">
          <vs-th sort-key="date_created">
            DATE
          </vs-th>
          <vs-th sort-key="message">
            MESSAGE
          </vs-th>
          <vs-th sort-key="subject">
            SUBJECT
          </vs-th>
          <vs-th sort-key="status">
            STATUS
          </vs-th>
          <vs-th sort-key="report">
            ACTIONS
          </vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="tr.date_created">
              {{ moment(tr.date_created).format("DD-MM-YYYY") }}
            </vs-td>

            <vs-td :data="tr.message">
              {{ prefix(tr.comment, 20, "...") }}
              <!-- {{ tr.comment }} -->
            </vs-td>

            <vs-td :data="tr.subject">
              {{ tr.subject }}
            </vs-td>
            <vs-td :data="tr.status">
              {{ tr.role }}
            </vs-td>
            <vs-td :data="tr.report">
              <vs-button size="small" @click="getComplaintById(tr.id)">View</vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>


    <vs-popup classContent="popup-example" title="Medical Request" :active.sync="popupActive">
      <vx-card>
        <div class="flex justify-between flex-wrap">
                            
        <h6>APPOINTMENT DATE:</h6>
        <p>{{complaintData.date_created || ""}}</p>
        <vs-divider />
        <h6>SUBJECT:</h6>
        <p>{{ complaintData.subject || ""}}</p>
        <vs-divider />
        <h6>STATUS :</h6>
        <p>{{ complaintData.comment || "" }}</p>
        <vs-divider />
        <h6>STATUS :</h6>
        <p>{{ complaintData.role || "" }}</p>
        <vs-divider />
        <h6>SENDER :</h6>
        <!-- <p>{{ complaintData.user.name || "" }}</p> -->
        <vs-divider />
        </div>
        <div class="flex justify-between flex-wrap">
        <vs-button
            class="w-full mt-6 cutomBtn"
            style="background: #E65252 !important; border-radius:55px;"
            @click="deleteComplaint(complaintData.id)"
            >Delete</vs-button
        >
        </div>
      </vx-card>
    </vs-popup>

  </div>
</template>

<script>
import { mapState } from "vuex";
import helper from "../../../helpers/helper";

export default {
  data(){
    return{
      popupActive:false,
      complaintData:{}
    }
  },
  computed: {
    ...mapState(["complaint"])
  },

  methods: {
    prefix(text, length, suffix) {
      return helper.textPrefix(text, length, suffix);
    },

    getComplaintById(id){
      const res = this.$store.getters.getComplaintById(id)
      this.complaintData = res
      this.popupActive = true
    },

    async deleteComplaint(id){
      await this.$store.dispatch("deleteComplaint", id)
    }
  },

};
</script>

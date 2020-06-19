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
              <!-- {{prefix(tr.comment, 25, "...")}} -->
              {{ tr.comment }}
            </vs-td>

            <vs-td :data="tr.subject">
              {{ tr.subject }}
            </vs-td>
            <vs-td :data="tr.status">
              {{ tr.role }}
            </vs-td>
            <vs-td :data="tr.report">
              <vs-button size="small">View</vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import helper from "../../../helpers/helper";

export default {
  computed: {
    ...mapState(["complaint"])
  },

  methods: {
    async fetch() {
      const data = { id: this.$store.state.user.sponsor.id };
      await this.$store.dispatch("fetchComplaint", data);
    },

    prefix(text, length, suffix = null) {
      return helper.textPrefix(text, length, (suffix = null));
    }
  },

  created() {
    this.fetch();
  }
};
</script>

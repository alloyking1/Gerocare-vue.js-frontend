<template>
  <div>
    <div v-if="patients.length != 0">
      <div class="row mb-5">
        <router-link to="/elderly/add">
          <vs-button color="success" type="border">Add Beneficiary</vs-button>
        </router-link>
      </div>
      <div class="vx-row">
        <patient v-for="(patient, i) in patients" :key="i" :patient="patient"/>
      </div>
    </div>
    <div v-else class="text-center customPosition">
      <h1 class="pt-2 p-3">No Beneficiary Added</h1>
      <p class="pt-2 pb-5 p-3">Click the Button below to get started adding a beneficiary</p>
      <router-link to="/elderly/add" class="pt-2">
        <vs-button color="success" type="border">Add Beneficiary</vs-button>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import { getSponsor } from "../../../api/sponsor/sponsor.api";
import Patient from "../../../components/dashboard/Patient.vue";
import { mapState } from "vuex";

export default {
  components: {
    Patient
  },

  computed: {
    ...mapState({
      patients: state => {
        return state.user.sponsor.patients;
      }
    })
  }
};
</script>

<style>
.cutomBtn {
  border-radius: 55px;
  padding: 1rem !important;
}

.customPosition{
  padding-top:22rem;
}
</style>

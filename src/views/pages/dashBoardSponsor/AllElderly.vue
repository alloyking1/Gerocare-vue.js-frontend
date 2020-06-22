<template>
  <div>
    <div class="vx-row">
      <patient v-for="(patient, i) in patients" :key="i" :patient="patient" />
    </div>
  </div>
</template>

<script>
import { getSponsor } from "../../../api/sponsor/sponsor.api";
import Patient from "../../../components/dashboard/Patient.vue";
// import {
//   findPatient,
//   editPatient,
//   deletePatient,
//   createPatients
// } from "../api/sponsor/patient.api";
import { mapState } from "vuex";

export default { 
  components:{
    Patient
  },

  computed: {
    ...mapState({
      patients: state => {
        return state.user.sponsor.patients;
      }
    }),
  },

};
</script>

<style>
.cutomBtn {
  border-radius: 55px;
  padding: 1rem !important;
}
</style>

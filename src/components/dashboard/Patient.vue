<template>
  <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
    <!-- <vx-card :title="patient.name" @click="viewPatient(patient.id)">
        <div class="vx-row">
          <div class="vx-col w-full sm:w-1/3 md:w-1/3  mb-base">
            <vs-chip color="success">{{ patient.status || 'Null' }}</vs-chip>
            <p style="font-size:10px; color:#9DCB47; padding-top:35px">
              {{ visit_count }}
            </p>
          </div>

          <div class="vx-col w-full sm:w-2/3 md:w-2/3 mb-base">
            <vs-avatar v-if="patient.avatar"
              class="mx-auto mb-6 block"
              size="47px"
              :src="patient.avatar"
            />
            <vs-avatar v-else
              class="mx-auto mb-6 block"
              size="47px"
              :text="patient.name"
            />

          </div>
        </div>
    </vx-card>-->

    <vx-card class="p-2" @click="viewPatient(patient.id)">
      <vs-avatar
        class="mx-auto mb-6 block"
        v-if="patient.avatar"
        size="80px"
        :src="patient.avatar"
      />
      <vs-avatar v-else class="mx-auto mb-6 block" size="47px" :text="patient.name" />
      <div class="text-center">
        <h4>{{ patient.name || '' }}</h4>
        <p class="text-grey">{{ visit_count || 0 }}</p>
      </div>
      <template slot="footer">
        <vs-divider />
        <div class="flex justify-between">
          <span class="flex items-center">
            <feather-icon icon="BellIcon" svgClasses="h-5 w-5 text-warning stroke-current" />
            <span class="ml-2">{{ visit_count}}</span>
          </span>
          <span class="flex items-center">
            <feather-icon icon="AlertCircleIcon" svgClasses="h-5 w-5 text-primary stroke-current" />
            <span class="ml-2">{{ patient.status || 'ACTIVE' }}</span>
          </span>
        </div>
      </template>
    </vx-card>
    <!-- </div> -->

    <div class="view">
      <vs-popup classContent="popup-example" title="Patient Profile" :active.sync="popupActive2">
        <vs-tabs alignment="center">
          <vs-tab label="Profile">
            <div class="vx-col w-full lg:w-3/3 sm:w-3/3 mb-base">
              <vx-card class="p-2">
                <div class="text-center p-5" style="padding:2rem !important">
                  <h3 class="text-3xl p-2">{{ this.singleElderly.name }}</h3>
                </div>
                <div class="flex justify-between flex-wrap">
                  <h6>Phone Number:</h6>
                  <p>
                    {{
                    this.singleElderly.phone_number || "Edit profile to add"
                    }}
                  </p>
                  <vs-divider />
                  <h6>Address:</h6>
                  <p>{{ this.singleElderly.address || "Edit to add Address" }}</p>
                  <vs-divider />
                  <h6>City:</h6>
                  <p>{{ this.singleElderly.city || "Edit to add city" }}</p>
                  <vs-divider />
                  <h6>State:</h6>
                  <p>{{ this.singleElderly.state || "Edit to add state" }}</p>
                  <vs-divider />
                  <h6>Type:</h6>
                  <p>{{ this.singleElderly.type || "Edit to add country" }}</p>
                  <vs-divider />
                </div>
                <div class="flex justify-between flex-wrap">
                  <!-- <vs-button class="mt-4 mr-2 shadow-lg" type="gradient" gradient-color-secondary="#CE9FFC">Edit</vs-button> -->
                  <vs-button
                    class="w-full mt-6 cutomBtn"
                    style="background: #E65252 !important;"
                    @click="removePatient(singleElderly.id)"
                  >Delete</vs-button>
                </div>
              </vx-card>
            </div>
          </vs-tab>

          <vs-tab label="Edit">
            <div class="vx-col w-full lg:w-3/3 sm:w-3/3 mb-base" style="margin:0 auto">
              <vx-card class="p-2">
                <div class="text-center p-4">
                  <h3 class="text-3xl p-2">Edit Profile</h3>
                  <p class="p-2">1 visit every month for 3 months</p>
                </div>

                <form action>
                  <!-- <vs-divider/> -->
                  <div class="vx-row">
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.name"
                        placeholder="patient name"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.address"
                        placeholder="patient address"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.state"
                        placeholder="patient state"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.phone_number"
                        placeholder="contact Phone number"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.type"
                        placeholder="patient type"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.blood_group"
                        placeholder="patient blodd group"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.emergency_email"
                        placeholder="emergency email"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.emergency_fulladdress"
                        placeholder="emergency address"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.emergency_name"
                        placeholder="emergency name"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.emergency_phone"
                        placeholder="emergency phone number"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.family_history"
                        placeholder="family history"
                        class="w-full mt-2"
                      />
                    </div>
                    <div class="vx-col md:w-2/2 w-full">
                      <vs-input
                        v-model="singleElderly.known_conditions"
                        placeholder="any know conditions ?"
                        class="w-full mt-2"
                      />
                    </div>
                  </div>
                  <vs-button class="w-full mt-6 cutomBtn" @click="edit(singleElderly.id)">Save</vs-button>
                </form>
              </vx-card>
            </div>
          </vs-tab>
        </vs-tabs>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["patient"],

  data() {
    return {
      singleElderly: {},
      colorx: "#4a5153",
      popupActivo5: false,
      popupActive2: false,
    };
  },

  computed: {
    visit_count() {
      return this.patient.visit_count <= 1
        ? this.patient.visit_count + " Visit left"
        : this.patient.visit_count + " Visits left";
    },

    ...mapState({
      sponsor: (state) => state.user.sponsor,
    }),
  },

  methods: {
    viewPatient(itemId) {
      let result = this.$store.getters.getElderlyById(itemId);
      this.singleElderly = { ...result };
      this.popupActive2 = true;
    },

    async removePatient(itemId) {
      if (confirm("Are you sure you want to delete this Beneficiary?")) {
        this.popupActive2 = false;
        this.$vs.loading();
        const data = {};
        data.id = this.sponsor.id;
        data.patientId = itemId;

        await this.$store.dispatch("deleteBeneficiary", data);
        this.$vs.loading.close();
      }
    },

    async edit(patientId) {
      this.popupActive2 = false;
      this.$vs.loading();
      const data = {};
      (data.detail = this.singleElderly),
        (data.id = this.sponsor.id),
        (data.patientId = patientId);

      await this.$store.dispatch("editElderly", data);
      this.$vs.loading.close();
      this.$vs.notify({
        title: "Edited",
        text: "Beneficiary Edited",
        color: "success",
        position: "top-right",
      });
    },
  },
};
</script>
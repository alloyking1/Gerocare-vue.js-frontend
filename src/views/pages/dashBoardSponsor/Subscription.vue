
<template>
  <div class="vx-row">
    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <vx-card class="mt-2 mb-2">
        <h3 style="font-size:15px" class="pb-5 ml-5">Category of Services</h3>

        <div v-for="(item, i) in service" :key="i">
          <div
            class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base pointer"
            @click="bindServiceId(item)"
          >
            <statistics-card-line
              hideChart
              class="mb-base p-3"
              icon="ArrowRightIcon"
              icon-right
              :statistic="item.name"
              statisticTitle
            />
          </div>
        </div>
      </vx-card>
    </div>

    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
      <div class="container w-full">
        <div class="row mb-5">
          <vs-button color="success" type="border" @click="popupActivo = true">Add Subscription</vs-button>
        </div>
        <subscriptionHistory :serviceList="serviceComponent"></subscriptionHistory>
      </div>
    </div>

    <div>
      <vs-popup :active.sync="popupActivo">
        <subscriptionPayment :serviceProp="serviceId"></subscriptionPayment>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import subscriptionHistory from "../Components/subscriptionHistory";
import subscriptionPayment from "../Components/subscriptionPayment";
import StatisticsCardLine from "../../../components/statistics-cards/StatisticsCardLine.vue";

export default {
  data() {
    return {
      popupActivo: false,
      service: [],
      serviceId: "",
      serviceComponent: ""
    };
  },

  methods: {
    fetchService() {
      let service = this.$store.state.services.data;
      this.service = service;
    },

    async bindServiceId(service) {
      this.serviceId = service.id;
      const result = await this.$store.getters.servicesFilter(service.code);
      console.log(result);
    }
  },

  created() {
    this.fetchService();
    // this.bindServiceId()
  },

  components: {
    subscriptionHistory,
    subscriptionPayment,
    StatisticsCardLine
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
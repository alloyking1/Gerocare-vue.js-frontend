<!-- =========================================================================================
    File Name: VxTimeline.vue
    Description: Timeline Component
    Component Name: VxTimeline
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <ul class="vx-timeline">
      <li v-for="item in data" :key="item.title">
          <div class="timeline-icon" :class="`bg-${item.color}`">
              <!-- <feather-icon :icon="item.icon" svgClasses="text-white stroke-current w-5 h-5" /> -->
              <feather-icon icon="AlertCircleIcon" svgClasses="text-white stroke-blue w-5 h-5"/>
          </div>
          <div class="timeline-info">
              <p class="font-semibold">Appointment Date: {{ item.appointment_date }}</p>
              <!-- <span class="activity-desc">{{ item.desc }}</span> -->
              <span class="activity-desc">Doctor is ready to see your elderly</span>
          </div>
          <small class="text-grey activity-e-time">{{ item.time }}</small>
      </li>
  </ul>
</template>

<script>
require('vue-simple-calendar/static/css/default.css')

export default {
  name: "vx-timeline",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxTimeline.scss";
</style>

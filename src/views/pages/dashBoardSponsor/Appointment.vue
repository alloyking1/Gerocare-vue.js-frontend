<template>
<div>
    <div id="simple-calendar-app">
        <div class="vx-card no-scroll-content">
            <calendar-view
                :displayPeriodUom="calendarView"
                :show-date="new Date()"
                class="theme-default">
                <!-- <calendar-view-header
                    slot="header"
                    slot-scope="t"
                    :header-props="t.headerProps"
                    @input="setShowDate" /> -->
                
                <div slot="header" class="mb-4">

                <div class="vx-row no-gutter">

                    <!-- Month Name -->
                    <div class="vx-col w-1/3 items-center sm:flex hidden">
                    <!-- Add new event button -->
                    <vs-button icon-pack="feather" icon="icon-plus" @click="promptAddNewEvent(new Date())">Add</vs-button>
                    </div>

                    <!-- Current Month -->
                    <div class="vx-col sm:w-1/3 w-full sm:my-0 my-3 flex sm:justify-end justify-center order-last">
                    <div class="flex items-center">
                        <feather-icon
                        :icon="$vs.rtl ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
                        @click="updateMonth(-1)"
                        svgClasses="w-5 h-5 m-1"
                        class="cursor-pointer bg-primary text-white rounded-full" />

                        <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ new Date() | month }}</span>

                        <feather-icon
                        :icon="$vs.rtl ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
                        @click="updateMonth(1)"
                        svgClasses="w-5 h-5 m-1"
                        class="cursor-pointer bg-primary text-white rounded-full" />
                    </div>
                    </div>

                    <div class="vx-col sm:w-1/3 w-full flex justify-center">
                    <template v-for="(view, index) in calendarViewTypes">
                        <vs-button
                        v-if="calendarView === view.val"
                        :key="String(view.val) + 'filled'"
                        type="filled"
                        class="p-3 md:px-8 md:py-3"
                        :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                        @click="calendarView = view.val"
                        >{{ view.label }}</vs-button>
                        <vs-button
                        v-else
                        :key="String(view.val) + 'border'"
                        type="border"
                        class="p-3 md:px-8 md:py-3"
                        :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                        @click="calendarView = view.val"
                        >{{ view.label }}</vs-button>
                    </template>

                    </div>
                </div>

                <div class="vx-row sm:flex hidden mt-4">
                    <div class="vx-col w-full flex">
                    <!-- Labels -->
                    <div class="flex flex-wrap sm:justify-start justify-center">
                        <div v-for="(label, index) in calendarLabels" :key="index" class="flex items-center mr-4 mb-2">
                            <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                            <span>{{ label.text }}</span>
                        </div>
                        <div class="flex items-center mr-4 mb-2">
                            <div class="h-3 w-3 inline-block rounded-full mr-2 bg-primary"></div>
                            <span>None</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </calendar-view>
        </div>

    </div>
	<div class="vx-row">

        <!-- ACTIVITY TIMELINE -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
            <vx-card title="Recent Appointments">
                <!-- output appointments -->
                <vx-timeline :data="appointmentData"></vx-timeline>
            </vx-card>
        </div>

		<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
			<vx-card title="All Appointments">
				<!-- <div class="demo-alignment">
                    <vs-radio v-model="type" vs-value="default">Default</vs-radio>
                    <vs-radio v-model="type" vs-value="shadow">Shadow</vs-radio>
                    <vs-radio v-model="type" vs-value="border">Border</vs-radio>
                    <vs-radio v-model="type" vs-value="margin">Margin</vs-radio>
                </div> -->

                <vs-collapse>

                    <vs-collapse-item>
                    <div slot="header">
                        Collapse item
                    </div>
                    Lorem....metus.
                    </vs-collapse-item>

                    <vs-collapse-item>
                    <div slot="header">
                        Collapse item 2
                    </div>
                    Nunc....maximus.
                    </vs-collapse-item>

                    <vs-collapse-item disabled>
                    <div slot="header">
                        Collapse item 3 - Disabled
                    </div>
                    Suspendisse....eu
                    </vs-collapse-item>

                    <vs-collapse-item>
                    <div slot="header">
                        Collapse item 4
                    </div>
                    Suspendisse....finibus.
                    </vs-collapse-item>
                </vs-collapse>
			</vx-card>
		</div>
		<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
			<vx-card title="Number of Visits">
				tesint
			</vx-card>
		</div>
	</div>
</div>
</template>

<script>
import VxTimeline from '@/components/timeline/VxTimeline.vue'

import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
// import moduleCalendar from '@/store/calendar/moduleCalendar.js'
require('vue-simple-calendar/static/css/default.css')

import Datepicker from 'vuejs-datepicker'
// import { en, he } from 'vuejs-datepicker/src/locale'

// api call
import {getSponsorAppointment} from '../../../api/sponsor/sponsor.api'

export default {
    data(){
        return{
            appointmentData: [
                {
                color : 'primary',
                icon  : 'PlusIcon',
                title : 'New Task Added',
                desc  : 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
                time  : '25 Days Ago'
                },
                {
                color : 'warning',
                icon  : 'AlertCircleIcon',
                title : 'Task Update Found',
                desc  : 'Cupcake gummi bears soufflé caramels candy',
                time  : '15 Days Ago'
                },
                {
                color : 'success',
                icon  : 'CheckIcon',
                title : 'Task Finished',
                desc  : 'Candy ice cream cake. Halvah gummi bears',
                time  : '20 mins ago'
                }
            ],
            type: 'margin',

            showDate: new Date(),
            disabledFrom: false,
            id: 0,
            title: '',
            startDate: '',
            endDate: '',
            labelLocal: 'none',

            langHe: he,
            langEn: en,

            url: '',
            calendarView: 'month',

            activePromptAddEvent: false,
            activePromptEditEvent: false,

            calendarViewTypes: [
                {
                label: 'Month',
                val: 'month'
                },
                {
                label: 'Week',
                val: 'week'
                },
                {
                label: 'Year',
                val: 'year'
                }
            ]
        }
    },

    created(){
        var sponsorId = this.$store.state.user.id;
        getSponsorAppointment(sponsorId)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error)
        })
    },

    methods:{
        updateMonth (val) {
            this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
        },
    },
    
    components: {
        VxTimeline,
        CalendarView,
        CalendarViewHeader,
        Datepicker
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/apps/simple-calendar.scss";
</style>
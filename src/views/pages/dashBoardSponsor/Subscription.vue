
<template>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">

            <vx-card class="mt-2 mb-2">
                <h3 style="font-size:15px" class="pb-5 ml-5">Category of Services</h3>

                <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base pointer" @click="popupActivo=true" >
                    <statistics-card-line
                    hideChart
                    class="mb-base p-3"
                    icon="ArrowRightIcon" 
                    icon-right
                    statistic= "Home Visit"
                    statisticTitle=""/>
			    </div> 
                <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base pointer">
                    <statistics-card-line
                    hideChart
                    class="mb-base p-3"
                    icon="ArrowRightIcon" 
                    icon-right
                    statistic= "Teleconsultation"
                    statisticTitle="" />
			    </div> 
                <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base pointer">
                    <statistics-card-line
                    hideChart
                    class="mb-base p-3"
                    icon="ArrowRightIcon" 
                    icon-right
                    statistic= "On-demand Visit"
                    statisticTitle="" />
			    </div> 
                <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base pointer">
                    <statistics-card-line
                    hideChart
                    class="mb-base p-3"
                    icon="ArrowRightIcon" 
                    icon-right
                    statistic= "Other Services"
                    statisticTitle="" />
			    </div> 
            </vx-card>
            
        </div>

        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
            <div class="container w-full">
                <subscriptionHistory></subscriptionHistory>
            </div>
        </div>

        <div>
            <vs-popup :active.sync="popupActivo">
                <subscriptionPayment></subscriptionPayment>
            </vs-popup>
        </div>
    </div>
</template>

<script>
    import subscriptionHistory from '../Components/subscriptionHistory'
    import subscriptionPayment from '../Components/subscriptionPayment'
    import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue'

    export default{
        data(){
            return{
                popupActivo:false
            }
        },
        
        components:{
            subscriptionHistory,
            subscriptionPayment,
            StatisticsCardLine,
        },

        // components:{
        // VueApexCharts,
		// StatisticsCardLine,
        // recentVisits	
	    // }
    }
</script>

<style scoped>
    .pointer{
        cursor:pointer
    }
</style>
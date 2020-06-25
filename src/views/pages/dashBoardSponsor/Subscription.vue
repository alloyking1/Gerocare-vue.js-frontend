
<template>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">

            <vx-card class="mt-2 mb-2">
                <h3 style="font-size:10px" class="pb-2">HOME VISITS</h3>
                <vs-button radius color="danger" type="gradient" icon-pack="feather" icon="icon-user-plus"></vs-button>
            </vx-card>
            <vx-card class="mt-2 mb-2">
                <h3 style="font-size:10px" class="pb-2">TELE-CONSULTATION</h3>
                <vs-button radius color="danger" type="gradient" icon-pack="feather" icon="icon-user-plus"></vs-button>
            </vx-card>
            <vx-card class="mt-2 mb-2">
                <h3 style="font-size:10px" class="pb-2">ON-DEMAN VISIT</h3>
                <vs-button radius color="danger" type="gradient" icon-pack="feather" icon="icon-user-plus"></vs-button>
            </vx-card>
            
        </div>

        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/4 mb-base">
            <vx-card title="">
                <div class="container w-full">
                    <div>txt</div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
    import sideBar from '../Components/subscriptionNav'

    export default{
        components:{
            sideBar
        }
    }
</script>

<style scoped>

</style>
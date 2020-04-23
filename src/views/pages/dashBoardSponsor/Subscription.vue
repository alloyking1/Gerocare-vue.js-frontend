<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="Add Subscription">
                    <form action="">

                        <vs-select v-model="city" class="w-full select-large mb-5">
                            <vs-select-item text="Basic Home Visit" class="w-full" />
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                        </vs-select>
                        <vs-select v-model="city" class="w-full select-large mb-5">
                            <vs-select-item text="1 visit / Month" class="w-full" />
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                        </vs-select>
                        <vs-select v-model="city" class="w-full select-large mb-5">
                            <vs-select-item text="3 Months" class="w-full" />
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                        </vs-select>

                        <!-- <ul class="con-s">
                            <li>
                            <label>Pay Now/Later</label>
                            <vs-switch color="success" v-model="switch2" />
                            </li>
                        </ul> -->
                    </form>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card class="text-center" style="padding:2.5rem">
                    <template slot="no-body">
                        <div class="p-8 clearfix">
                            <div>
                                <h1>
                                  <sup class="text-lg">$</sup>
                                  <span>233</span>
                                </h1>
                                <br>
                                <small>
                                  <span class="text-grey">Deposits: </span>
                                  <span>$</span>
                                  <span>200</span>
                                </small>
                            </div>
                            <br>
                            <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Pay Now</vs-button>
                        </div>
                        
                    </template>
                </vx-card>
            </div>
		</div>

        <div class="vx-row">
            <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base">
                <vx-card title="Subscriptions">
                    <vs-table :data="users">

                                <template slot="thead">
                                <vs-th>Email</vs-th>
                                <vs-th>Name</vs-th>
                                <vs-th>Website</vs-th>
                                <vs-th>Nro</vs-th>
                                </template>

                                <template slot-scope="{data}">
                                    <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data">

                                        <vs-td :data="data[indextr].email">
                                        {{ data[indextr].email }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].username">
                                        {{ data[indextr].name }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].id">
                                        {{ data[indextr].website }}
                                        </vs-td>

                                        <vs-td :data="data[indextr].id">
                                        {{ data[indextr].id }}
                                        </vs-td>
                                    </vs-tr>
                                </template>

                            </vs-table>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        cityOptions: [
        {text: "New York", value:"new-york"},
        {text: "Chicago", value:"chicago"},
        {text: "San Francisco", value:"san-francisco"},
        {text: "Boston", value:"boston"},
        ],
        color:'#5a3cc4',
        switch1:true,
        switch2:true,
    }
  }
}
</script>
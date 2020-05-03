<template>
    <div>
        <!-- COL AREA -->
        <div class="vx-row">
            <!-- COL 1 -->
            <div class="vx-col w-full lg:w-3/3">
                <!-- ABOUT CARD -->
                <vx-card title="About" class="mt-base">
                    <!-- ACTION SLOT -->
                    <template slot="actions">
                        <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                    </template>

                    <!-- USER BIO -->
                    <div class="Full Name">
                        <h6>Full Name:</h6>
                        <p>{{this.sponsor.user.name}}</p> 
                    </div>

                    <div class="mt-5">
                        <h6>Email:</h6>
                        <p>{{this.sponsor.user.email}}</p>  
                    </div>

                    <!-- OTEHR DATA -->
                    <div class="mt-5">
                        <h6>Phone Number:</h6>
                        <p>{{this.sponsor.phone_number}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Address:</h6>
                        <p>{{this.sponsor.address || "Edit to add Address"}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>City:</h6>
                        <p>{{this.sponsor.city || "Edit to add city"}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>State:</h6>
                        <p>{{this.sponsor.state || "Edit to add state"}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Country:</h6>
                        <p>{{this.sponsor.country || "Edit to add country"}}</p>
                    </div>

                    <!-- <form action="">
                        <div class="vx-row">
                            <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="First Name" value="this.sponsor.user.name"  />
                            </div>
                            
                            <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="Last Name" v-model="input26" />
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="City" v-model="input27" />
                            </div>
                            <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="Country" v-model="input28" />
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="Company" v-model="input29" />
                            </div>
                            <div class="vx-col sm:w-1/2 w-full mb-6">
                            <vs-input type="email" class="w-full" label-placeholder="Email" v-model="input30" />
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col w-full mb-6">
                            <vs-checkbox class="inline-flex" v-model="check7">Remember Me</vs-checkbox>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col w-full">
                            <vs-button class="mr-3 mb-2">Submit</vs-button>
                            <vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button>
                            </div>
                        </div>
                    </form> -->
                </vx-card>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sponsor:{
                name:"hello"
            }
        }
    },

    created(){
        this.sponsor = this.$store.state.sponsor;
        console.log(this.sponsor)
        console.log(this.sponsor.user.name)
    }
}
</script>
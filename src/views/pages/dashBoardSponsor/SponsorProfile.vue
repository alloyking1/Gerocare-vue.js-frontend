<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-2/2 md:w-4/4 lg:w-4/4 xl:w-4/4 mb-base">
                <vx-card class="p-3">
                    <div class="flex justify-between text-center mt-4" slot="no-body-bottom"> 
                        <div class="w-1/2 p-20 pt-20 border border-solid d-theme-border-grey-light border-r-1 border-b-0 border-l-0 border-t-0">
                            <div class="row">

                                <div class="text-center">
                                    <!-- <img :src="sponsorEdit.avatar" alt="@/assets/images/pages/gerocareAvater.svg"> -->
                                </div>

                                <div class="con-img ml-12 p-5">
                                    <img
                                    key="onlineImg"
                                    :src="sponsorEdit.avatar"
                                    alt="@/assets/images/pages/gerocareAvater.svg"
                                    width="400"
                                    height="400"
                                    class="cursor-pointer block img-responsive"
                                    />
                                </div>

                                <div class="text-center">
                                    <h3>{{this.sponsorEdit.name}}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="w-2/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0 border-t-0 p-3">
                            <div>
                            <!-- <h4 class="text-center">Primary Contact</h4> -->
                            <h4 class="text-center">Sponsor Profile</h4>
                            <div class="mb-4 mt-base">
                                <div class="text-center">
                                    <small>Profile Details</small>
                                </div>
                            </div>
                            <div class="flex justify-between flex-wrap">
                                <h6>Phone Number:</h6>
                                <p>{{this.sponsorEdit.phone_number}}</p>
                                <vs-divider />
                                <h6>Address:</h6>
                                <p>{{this.sponsorEdit.address || "Edit to add Address"}}</p>
                                <vs-divider />
                                <h6>City:</h6>
                                <p>{{this.sponsorEdit.city || "Edit to add city"}}</p>
                                <vs-divider />
                                <h6>State:</h6>
                                <p>{{this.sponsorEdit.state || "Edit to add state"}}</p>
                                <vs-divider />
                                <h6>Country:</h6>
                                <p>{{this.sponsorEdit.country || "Edit to add country"}}</p>
                                <vs-divider/>
                                <h6>Email:</h6>
                                <p>{{this.sponsorEdit.email || "Edit to add country"}}</p>
                                <vs-divider />
                            </div>
                    </div>
                        </div>
                    </div>
                </vx-card>
            </div>
            <!-- <div class="vx-col w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-2/4 mb-base">
                <vx-card>
                    <div>
                        <h4 class="text-center">Secondary Contact</h4>
                        <div class="mb-4 mt-base">
                            <div class="text-center">
                                <small>Profile Details</small>
                            </div>
                        </div>
                        <div class="flex justify-between flex-wrap">
                            <h6>Phone Number:</h6>
                            <p>{{this.sponsorEdit.phone_number}}</p>
                            <vs-divider />
                            <h6>Address:</h6>
                            <p>{{this.sponsorEdit.address || "Edit to add Address"}}</p>
                            <vs-divider />
                            <h6>City:</h6>
                            <p>{{this.sponsorEdit.city || "Edit to add city"}}</p>
                            <vs-divider />
                            <h6>State:</h6>
                            <p>{{this.sponsorEdit.state || "Edit to add state"}}</p>
                            <vs-divider />
                            <h6>Country:</h6>
                            <p>{{this.sponsorEdit.country || "Edit to add country"}}</p>
                            <vs-divider />
                            <h6>Email:</h6>
                            <p>{{this.sponsorEdit.email || "Edit to add country"}}</p>
                        </div>
                    </div>
                </vx-card>
            </div> -->
        </div>
        <div class="vx-row">

            <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
				<vx-card>
                    <vs-button icon-pack="feather" type="border"  class="shadow-md w-full cutomBtn mb-3 btn-outline" @click="popup.profile=true">UPDATE PROFILE</vs-button>
                    <vs-button  icon-pack="feather" type="border" class="shadow-md w-full cutomBtn mb-3" @click="popu.preference = true">UPDATE PREFERENCES</vs-button>
                    <vs-button  icon-pack="feather"  class="shadow-md w-full cutomBtn mb-3" @click="popup.password=true">CHANGE PASSWORD</vs-button>
                    
                </vx-card>
			</div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
				<vx-card class="invoice-card" style="background: #EDF5FC !important;border: 1px solid #047BF8 !important;border-radius: 5px !important;">
                    <h5 class="text-center p-3" style="font-weight: 500;font-size: 14px;line-height: 16px;color: #047BF8;">BACKUP/DOWNLOAD</h5>
                    <vs-select class="w-full select-large mb-5">
                        <vs-select-item text="All Invoices" class="w-full" />
                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in transactionRecord" class="w-full" />
                    </vs-select>
                   <vs-button  icon-pack="feather"  class="shadow-md w-full cutomBtn mb-3" style="background: #047BF8 !important;">DOWNLOAD BACKUP</vs-button>
                </vx-card>
			</div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
				<vx-card class="ext-center" style="background: #FFF2F2;border: 1px solid #E65252;border-radius: 5px;">
                    <h5 class="text-center p-3" style="font-weight: 500;font-size: 14px;line-height: 16px;color: #E65252;">BACKUP/DOWNLOAD</h5>
                    <p class="p-3 text-center" style="color: #E65252;">This action will permanently erased all records on Gerocare and it is irrevocable.</p>
                   <vs-button  icon-pack="feather"  class="shadow-md w-full cutomBtn mb-3 dnager" style="background: #E65252 !important;">DELETE MY ACCOUNT</vs-button>
                </vx-card>
			</div>
        </div>

        <div>
            <vs-popup :active.sync="popup.profile" title="Edit Profile">
                <keep-alive>
                    <sponsorProfileUpdate :data="this.sponsorEdit" v-on:popup="popup.profile = false"></sponsorProfileUpdate>
                </keep-alive>
            </vs-popup>
        
            <vs-popup :active.sync="popup.password" title="Change password">
                <keep-alive>
                    <sponsorPasswordReset></sponsorPasswordReset>
                </keep-alive>
            </vs-popup>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import sponsorPasswordReset from "../Components/sponsorPasswordReset"
    import sponsorProfileUpdate from "../Components/sponsorProfileUpdate"

    export default {
        data(){
            return{
                popup:{
                    password:false,
                    profile:false,
                    preference:false
                },
                transactionRecord:[]
            }
        },

        computed:{
            ...mapState({
                sponsorEdit:state=>state.user.sponsor
            })
        },

        components:{
            sponsorPasswordReset,
            sponsorProfileUpdate
        },

    }
</script>

<style scoped>
    .invoice-card{
        background: #EDF5FC !important;
        border: 1px solid #047BF8 !important;
        border-radius: 5px !important;
    }

    .cutomBtn{
        border-radius:55px;
        padding:1rem !important;
    }
</style>
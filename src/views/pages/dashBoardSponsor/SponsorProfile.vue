<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-2/4 mb-base">
                <vx-card class="p-3">
                    <div class="flex justify-between text-center mt-4" slot="no-body-bottom"> 
                        <div class="w-1/2 p-20 pt-20 border border-solid d-theme-border-grey-light border-r-1 border-b-0 border-l-0 border-t-0">
                            <svg width="112" height="137" viewBox="0 0 112 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M107.549 98.7109C101.559 90.8936 94.3124 85.8172 83.9294 82.9368L74.2007 116.998C74.2007 120.135 71.6319 122.704 68.4947 122.704C65.3585 122.704 62.7896 120.135 62.7896 116.998V89.8963C62.7896 85.96 59.5937 82.7638 55.6571 82.7638C51.7208 82.7638 48.5252 85.96 48.5252 89.8963V116.998C48.5252 120.135 45.9564 122.704 42.8199 122.704C39.6824 122.704 37.1135 120.135 37.1135 116.998L27.3849 82.9368C17.0015 85.8451 9.75534 90.8936 3.76548 98.7109C1.39729 101.792 0.110519 107.982 0.0263672 111.293C0.0546272 112.149 0.0263672 113.147 0.0263672 114.145V119.851V125.557C0.0263672 131.861 5.13326 136.968 11.4381 136.968H99.8756C106.18 136.968 111.288 131.861 111.288 125.557V119.851V114.145C111.288 113.147 111.26 112.149 111.288 111.293C111.202 107.982 109.916 101.792 107.549 98.7109ZM25.7022 30.2147C25.7022 46.8752 36.0886 71.3528 55.6571 71.3528C74.8855 71.3528 85.6115 46.8752 85.6115 30.2147C85.6115 13.5548 72.203 0.0317383 55.6571 0.0317383C39.1112 0.0317383 25.7022 13.5548 25.7022 30.2147Z" fill="#3F9955"/>
                                </svg>
                            <div class="text-center">
                                <h3>{{this.sponsorEdit.name}}</h3>
                            </div>
                        </div>
                        <div class="w-2/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0 border-t-0 p-3">
                            <div>
                            <h4 class="text-center">Primary Contact</h4>
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
                            </div>
                    </div>
                        </div>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-2/4 mb-base">
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
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">

            <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
				<vx-card>
                    <vs-button icon-pack="feather" type="border"  class="shadow-md w-full cutomBtn mb-3 btn-outline">UPDATE PROFILE</vs-button>
                    <vs-button  icon-pack="feather" type="border" class="shadow-md w-full cutomBtn mb-3">UPDATE PREFERENCES</vs-button>
                    <vs-button  icon-pack="feather"  class="shadow-md w-full cutomBtn mb-3" @click="popupActivo=true">CHANGE PASSWORD</vs-button>
                    
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

        <div id="ooo">
            <vs-popup :active.sync="popupActivo" >
                <div id="popUp"></div>
                <!-- <sponsorProfileUpdate></sponsorProfileUpdate> -->
            </vs-popup>
        </div>

    </div>
</template>

<script>
    import {getSponsor, updateSponsor } from  "../../../api/sponsor/sponsor.api"
    import { mapState } from 'vuex'
    import sponsorPasswordReset from "../Components/sponsorPasswordReset"
    import sponsorProfileUpdate from "../Components/sponsorProfileUpdate"

    export default {
        data(){
            return{
                popupActivo:false,
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

        methods:{
            bindComponent(){
                // this.$nextTick(()=>{
                    // console.log(document);
                    
                    const popUp = document.getElementById('popUp')
                    // popUp.append(`<p>djflsdjfslj</p>`)
                    const pp = document.createElement('p')
                    pp.innerText = "hello world"
                    popUp.append(pp)
                // })
                
                // console.log(popUp.appendChild(<sponsorProfileUpdate></sponsorProfileUpdate>))
            }
        },
        
        mounted(){
            this.bindComponent()
        }
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

<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/login2.png" alt="register" class="mx-auto login-img">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="px-8 pt-8 register-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Create Account</h4>
                                    <p>Fill the below form to create a new account.</p>
                                </div>

                                <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
                                  <tab-content title="Step 1" class="mb-5">

                                      <!-- tab 1 content -->
                                      <div class="vx-row">
                                          <div class="vx-col md:w-1/2 w-full mt-5">
                                              <!-- <vs-input type="text" label="Full Name" v-model="user.fullName" class="w-full" label-placeholder="Full Name" @click="alert('hi')" /> -->
                                              <vs-input name="email" type="email" icon-no-border icon="icon icon-user" v-model="user.fullName" icon-pack="feather" label-placeholder="Full Name" class="w-full"/>
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full mt-5">
                                              <vs-input type="email" label="Email"  v-model="user.email" class="w-full" />
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full mt-5">
                                              <vs-input type="password" label="Password"  v-model="user.password" class="w-full" />
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full mt-5">
                                              <vs-input type="password" label="Confirm password"  v-model="user.passwordConfirm" class="w-full" />
                                          </div>
                                      </div>
                                  </tab-content>

                                  <!-- tab 2 content -->
                                  <tab-content title="Step 2" class="mb-5">
                                      <div class="vx-row">
                                          <div class="vx-col md:w-1/2 w-full">
                                              <vs-input type="text" label="Patient Name" v-model="user.patientName" class="w-full mt-4" />
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full">
                                              <vs-input type="number" label="Patient Tel" v-model="user.patientPhone" class="w-full mt-4" />
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full">
                                              <vs-input type="text" v-model="user.patientAddress" label="Patient Address" class="w-full mt-4" />
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full">
                                              <!-- <vs-select v-model="user.city" class="w-full mt-4" label="Patient City">
                                                  <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item, index) in cityOptions" class="w-full mt-4" />
                                              </vs-select> -->

                                              <!-- <label for="">Patient City</label> -->
                                              <select v-model="user.city" class="w-full mt-4 select-custom" label="Patient City" >
                                                <option class="w-full mt-4" v-for="(item, index) in cityOptions" :key="index" :value="item.value">{{item.text}}</option>
                                              </select>

                                              
                                              
                                          </div>
                                      </div>
                                  </tab-content>

                                  <!-- tab 3 content -->
                                  <tab-content title="Step 3" class="mb-5">
                                      <div class="vx-row">
                                          <div class="vx-col md:w-1/2 w-full">
                                              <select v-model="user.state" class="w-full mt-4 select-custom" label="Patient City" >
                                                <option class="w-full mt-4" v-for="(item, index) in stateOptions" :key="index" :value="item.value">{{item.text}}</option>
                                              </select>
                                          </div>

                                          <div class="vx-col md:w-1/2 w-full">
                                              <select v-model="user.patientVisit" class="w-full mt-4 select-custom" label="Patient City" @change="visitCost">
                                                <option class="w-full mt-4" v-for="(item, index) in patientVisitOptions" :key="index" :value="item.value">{{item.text}}</option>
                                              </select>
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full" @clicks="visitCost">
                                              <select v-model="user.NumberOfMonths" class="w-full mt-4 select-custom" label="Patient City" @change="visitCost">
                                                <option class="w-full mt-4" v-for="(item, index) in patientMonthOptions" :key="index" :value="item.value">{{item.text}}</option>
                                              </select>
                                          </div>
                                          <div class="vx-col md:w-1/2 w-full md:mt-8">
                                              <div class="demo-alignment">
                                                  <!-- <span>Requirements:</span>
                                                  <div class="flex">
                                                    <vs-checkbox>Staffing</vs-checkbox>
                                                    <vs-checkbox>Catering</vs-checkbox>
                                                  </div> -->
                                                  <div class="flex">
                                                    <small>{{this.user.patientVisit}} visit every month for {{this.user.NumberOfMonths}} months</small>
                                                    <vs-chip color="success">
                                                      <!-- <vs-avatar icon-pack="feather" icon="icon-mail" /> -->
                                                      <span>N {{this.visitCostSum}}</span>
                                                    </vs-chip>
                                                  </div>
                                                  <div class="flex">
                                                    <!-- <vs-chip color="danger">
                                                      <vs-avatar icon-pack="feather" icon="icon-slash" />
                                                      <span>{{this.visitCostSum}}</span>
                                                    </vs-chip> -->
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </tab-content>

                                </form-wizard>
                                <vs-divider>OR</vs-divider>
                                <div class="loginDiv">
                                  <small>Already have an account?</small>
                                  <router-link to="/pages/login">Log In</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>

   
</template>

<script>


import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import {createAccount} from '../../../api/register.api'

export default {
  data () {
    return {
      user:{
        fullName: '',
        email: '',
        password: '',
        passwordConfirm:'',
        patientName: '',
        patientAddress: '',
        patientPhone: '',
        city: '',
        state: '',
        patientVisit: '',
        NumberOfMonths: ''
      },
      visitCostSum: '',

      cityOptions: [
          {text: 'Port Harcourt', value:'new-york'},
          {text: 'Abuja', value:'chicago'},
          {text: 'Lagos', value:'san-francisco'},
      ],
      stateOptions: [
        {text: 'Rivers', value:'rivers'},
        {text: 'Lagos', value:'lagos'},
        {text: 'Abuja', value:'abuja'}
      ],
      patientVisitOptions: [
        {text: '1/Month', value:'1'},
        {text: '2/Month', value:'2'},
        {text: '4/Month', value:'4'},
      ],

      patientMonthOptions: [
        {text: '1 Month', value:'1'},
        {text: '3 Months', value:'3'},
        {text: '6 Months', value:'6'},
        {text: '1 Year', value:'12'}
      ],

      countries: [
        {
          countryCode: "DE",
          countryName: "Germany",
        },
        {
          countryCode: "AUS",
          countryName: "Australia",
        },
        {
          countryCode: "CA",
          countryName: "Canada",
        },
      ]
    }
  },
  methods: {
    visitCost(){
      let visits = this.user.patientVisit;
      let months = this.user.NumberOfMonths;
      let amount = 6500;

      let cost = visits * 6500;
      let total = cost * months;
      let result = this.visitCostSum = total;
      console.log(result);
    },

    formSubmitted () {
      createAccount(this.user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      console.log(this.user);
    }
  },
  components: {
    FormWizard,
    TabContent,
  }

}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}

.select-custom{
  border-color: #dbdada;
  padding: 5%;
  border-radius: 5px;
  margin-top: 22%!important;
}

.loginDiv{
  text-align: center;
  padding-bottom: 5%;
}

.login-img{
  width: 100%;
  height: auto;
}
</style>

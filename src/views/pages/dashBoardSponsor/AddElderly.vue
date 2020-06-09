<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full sm:w-2/2 md:w-5/12 lg:w-5/12 xl:w-5/12 mb-base" style="margin:0px auto; padding:2rem">
				<vx-card title="">
					<div class="text-center p-5">
						<h3 class="text-3xl">Add Elderly</h3>
					</div>
					
					<form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Finish" @on-complete="formSubmitted">
						<!-- <tab-content title="Personal Details" class="mb-5" :before-change="validateFirstStep"> -->
						<tab-content title="Personal Details" class="mb-5" >

							<!-- tab 1 content -->
							<div class="container">
								<div class="vx-row">
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input placeholder="Full Name" v-model="patient.name" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<!-- <vs-input label="Patient Address"  v-model="patient.address" class="w-full" /> -->
										<vs-select class="w-full select-large" placeholder="Gender" v-model="patient.gender">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in gender" class="w-full" />
										</vs-select>
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select v-model="patient.status" placeholder="Marital Status" class="w-full select-large">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in status" class="w-full" />
										</vs-select>
									</div>
									
								</div>
							</div>
						</tab-content>

						<!-- tab 2 content -->
						<!-- <tab-content title="Contact Details" class="mb-5" :before-change="validateSecondStep"> -->
						<tab-content title="Contact Details" class="mb-5">
							<!-- tab 2 content -->
							<div class="container">
								<div class="vx-row">
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input placeholder="Phone Number" v-model="contactDetails.phone" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-input placeholder="Email" type="email" v-model="contactDetails.email" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-input placeholder="Home Address" v-model="contactDetails.address" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select class="w-full select-large" placeholder="Country" v-model="contactDetails.country">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in country" class="w-full" />
										</vs-select>
									</div>

									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select class="w-full select-large" placeholder="State" v-model="contactDetails.state">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in state" class="w-full" />
										</vs-select>
									</div>

									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select class="w-full select-large" placeholder="City" v-model="contactDetails.city">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in city" class="w-full" />
										</vs-select>
									</div>
								</div>
							</div>
						</tab-content>

						<!-- tab 3 content -->
						<!-- <tab-content title="Emergency Contact" class="mb-5" :before-change="validateThirdStep"> -->
						<tab-content title="Emergency Contact" class="mb-5">

							<div class="container">
								<div class="vx-row">
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input placeholder="Emergency Contact’s Name" v-model="emergencyDetails.name" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-input placeholder="Emergency Phone Number (e.g +234 12345678)" v-model="emergencyDetails.phone" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-input placeholder="Emergency Address" v-model="emergencyDetails.address" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-input placeholder="Emergency Email" v-model="emergencyDetails.email"  class="w-full" />
									</div>
								</div>
							</div>
						</tab-content>

						<!-- tab 4 content -->
						<tab-content title="Subscribe" class="mb-5" :before-change="validateForthStep">
							<div class="container">
								<div class="vx-row">
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select class="w-full select-large" placeholder="Visits/Month" v-model="paymentDetails.visit" @change="visitCost">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in visit" class="w-full" />
										</vs-select>
									</div>
									
									<div class="vx-col md:w-2/2 w-full mt-2">
										<vs-select  class="w-full select-large" placeholder="Month/Year" v-model="paymentDetails.months" @change="visitCost">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in months" class="w-full" />
										</vs-select>
									</div>

									<div class="vx-col md:w-2/2 w-full mt-2">
									<div class="text-center p-4">

										<p class="p-2">AMOUNT</p>
										<h3 class="text-5xl p-2">N {{this.visitCostSum}}</h3>
										<p class="p-2">1 visit every month for 3 months</p>
										<vs-radio color="success" vs-value="true" v-model="payment">Pay Now</vs-radio>
                                		<vs-radio style="margin-left:10px;" color="success" vs-value="false" v-model="payment">Pay Later</vs-radio>
									</div>
									</div>

									<div class="vx-col md:w-2/2 w-full mt-2" v-if="payment === 'true'">
										<vs-select class="w-full select-large" placeholder="Payment methods" v-model="paymentDetails.paymentMethod">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in paymentOption" class="w-full" />
										</vs-select>
									</div>
								</div>
							</div>
						</tab-content>
						<el-button type="primary" class="btn-custom-prev" slot="prev">BACK</el-button>
						<el-button type="primary" class="btn-custom-next" slot="next">NEXT</el-button>
						<el-button type="primary" class="btn-custom-next" slot="finish">FINISH</el-button>

					</form-wizard>
				</vx-card>
			</div>
		</div>



		

	</div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import {createPatients} from '../../../api/sponsor/patient.api'

export default {
	data(){
		return {
			patient:{
				name:'',
				gender:'',
				status:''
			},

			contactDetails:{
				phone:'',
				email:'',
				address:'',
				country:'',
				state:'',
				city:'',
			},

			emergencyDetails:{
				name:'',
				phone:'',
				address:'',
				email:''
			},

			paymentDetails:{
				visit:'',
				months:'',
				paymentMethod:''
			},

			visitCostSum:0,
			payment:'',

			gender:[
				{name:'Male', value:'Male'},
				{name:'Female', value:'female'},
			],
			status:[
				{name:'Single', value:'single'},
				{name:'Couple', value:'couple'},
			],
			country:[
				{name:'Nigeria', value:'Nigeria'},
				{name:'Ghana', value:'ghana'},
			],
			state:[
				{name:'Rivers', value:'rivers'},
				{name:'Lagos', value:'lagos'},
			],
			city:[
				{name:'port harcourt', value:'ph'},
				{name:'asaba', value:'asaba'}
			],
			visit:[
				{name: '1/Month', value:'1'},
				{name: '2/Month', value:'2'},
				{name: '4/Month', value:'4'},
			],

			months: [
				{name: '1 Month', value:'1'},
				{name: '3 Months', value:'3'},
				{name: '6 Months', value:'6'},
				{name: '1 Year', value:'12'}
			],

			paymentOption:[
				{name:'Debit/Credit Cards', value:'card'},
				{name:'Teller Payment/Bankd Transfer', value:'TF'}
			]
		}
	},

	methods:{

		formSubmitted(){
			for(var val in this.patient){
				if(this.patient[val]  === ""){
          			this.$vs.notify({title:'Validation error',text:`All field is required`,color:'danger',position:'top-right'});
				}
			}

			this.post();
		},

		post(){
			this.$vs.loading()

			let id = this.$store.state.user.id;

			createPatients(id, this.patient)
			.then(res => {
				this.$vs.loading.close()
				this.$vs.notify({title:'Success',text:`patient added successfully`,color:'warning',position:'top-right'});
			})
			.catch(err => {
          		this.$vs.loading.close()
				this.$vs.notify({title:'Error',text:`Something is wrong. Patient not created. Reload the page and try again`,color:'danger',position:'top-right'});
			})
		},

		validateFirstStep(){
			if(this.patient.name === "" || this.patient.gender === "" || this.patient.status  === ""){
				this.$vs.notify({title:'Validation error',text:`All field is required`,color:'danger',position:'top-right'});
				return false
			}else{
				return true
			}
		},
		
		validateSecondStep(){
			for(var val in this.contactDetails){
				if(this.contactDetails[val]  === ""){
					this.$vs.notify({title:'Validation error',text:`All field is required`,color:'danger',position:'top-right'});
					return false
				}
			}
			return true
		},

		validateThirdStep(){
			for(var val in this.emergencyDetails){
				if(this.emergencyDetails[val]  === ""){
					this.$vs.notify({title:'Validation error',text:`All field is required`,color:'danger',position:'top-right'});
					return false
				}
			}
			return true
		},

		validateForthStep(){
			if(this.visitCostSum <= 0){
				this.$vs.notify({title:'Validation error',text:`Select number of visits and number of months`,color:'danger',position:'top-right'});
			}else{
				if(this.payment === ''){
					this.$vs.notify({title:'Validation error',text:`Select a payment option`,color:'danger',position:'top-right'});
				}

				// if(this.){

				// }
			}
			return true
		},

		visitCost(){

			let visits = this.paymentDetails.visit;
			let months = this.paymentDetails.months;
			let amount = 6500;

			let cost = visits * 6500;
			let total = cost * months;
			this.visitCostSum = total;
		
		},
	},

	components: {
    FormWizard,
    TabContent
  }
}
</script>

<style scoped>
	.btn-custom-next{
		border-radius: 22px; 
		padding: 10px; 
		padding-left: 80px; 
		padding-right: 80px; 
		width: 100%; 
		background-color: 
		rgba(var(--vs-primary), 1);
		color: white;
		align-items: center;
		/* : pointer; */
	}
	.btn-custom-prev{
		border-radius: 22px; 
		padding: 10px; 
		padding-left: 80px; 
		padding-right: 80px; 
		width: 100%; 
		background-color: white;
		color: rgba(var(--vs-primary), 1);
		border:1px solid rgba(var(--vs-primary), 1);
		align-items: center;
	}

</style>
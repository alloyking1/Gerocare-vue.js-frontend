<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full sm:w-2/2 md:w-5/12 lg:w-5/12 xl:w-5/12 mb-base" style="margin:0px auto; padding:2rem">
				<vx-card title="">
					<div class="text-center p-5">
						<h3 class="text-3xl">Add Elderly</h3>
					</div>
					
					<ValidationObserver >
						<form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Finish" @on-complete="formSubmitted">
							<tab-content title="Personal Details" class="mb-5" :before-change="validateFirstStep">
							<!-- <tab-content title="Personal Details" class="mb-5" > -->

								<!-- tab 1 content -->
								<ValidationObserver ref="firstForm">
									<div class="container">
										<div class="vx-row">
											
												<div class="vx-col md:w-2/2 w-full mt-2">
													<ValidationProvider  name="Marital Status" rules="required" v-slot="{ errors }">
														<vs-select v-model="patients.type" @change="getService" placeholder="Marital Status" class="w-full select-large">
															<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in status" class="w-full" />
														</vs-select>
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
											
											
												<div class="vx-col md:w-2/2 w-full mt-2" v-if="patients.type !='couple'">
													<ValidationProvider  name="Name" rules="required" v-slot="{ errors }">
														<span>
															<vs-input placeholder="Full Name" v-model="patients.name" class="w-full" />
														</span>

														<span>{{ errors[0] }}</span>
													</ValidationProvider>
													<ValidationProvider  name="Sex" rules="required" v-slot="{ errors }">
														<span>
															<vs-select class="w-full select-large mt-2" placeholder="Gender" v-model="patients.sex">
																<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in gender" class="w-full" />
															</vs-select>
														</span>
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
													<ValidationProvider  name="Phone number" rules="required" v-slot="{ errors }">
														<span>
															<vs-input placeholder="Phone Number" v-model="patients.name" class="w-full mt-2" />
														</span>

														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>

												<div class="vx-col md:w-2/2 w-full mt-2" v-if="patients.type === 'couple'">
													<ValidationProvider  name="Name" rules="required" v-slot="{ errors }">
														<span class="mt-2">
															<vs-input placeholder="Name 1" v-model="patients.name" class="w-full" />
														</span>

														<vs-input placeholder="Name 2" v-model="patients.couple_name" class="w-full mt-2" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>

													<ValidationProvider  name="Email 1" rules="required" v-slot="{ errors }">
														<vs-input placeholder="Email 1" v-model="patients.couple_name" class="w-full mt-2" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>

													<ValidationProvider  name="Email 2" rules="required" v-slot="{ errors }">
														<vs-input placeholder="Email 2" v-model="patients.couple_name" class="w-full mt-2" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>

													<ValidationProvider  name="Phone Number 1" rules="required" v-slot="{ errors }">
														<vs-input placeholder="Phone Number 1" v-model="patients.couple_name" class="w-full mt-2" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>

													<ValidationProvider  name="Phone Number 2" rules="required" v-slot="{ errors }">
														<vs-input placeholder="Phone Number 2" v-model="patients.couple_name" class="w-full mt-2" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
											
																					
										</div>
									</div>
								</ValidationObserver >
							</tab-content>
							

							<!-- tab 2 content -->
							<tab-content title="Contact Details" class="mb-5" :before-change="validateSecondStep">
							<!-- <tab-content title="Contact Details" class="mb-5"> -->
								<!-- tab 2 content -->
								<ValidationObserver ref="secondForm">
									<div class="container">
										<div class="vx-row">
											<div class="vx-col md:w-2/2 w-full mt-5">
												<ValidationProvider  name="Phone Number" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Phone Number" v-model="patients.phone_number" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Email" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Email" type="email" v-model="patients.email" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Home Address" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Home Address" v-model="patients.address" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Country" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="Country" v-model="patients.country">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in country" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>

											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="State" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="State" v-model="patients.state">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in state" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>

											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="City" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="City" v-model="patients.city">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in city" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
										</div>
									</div>
								</ValidationObserver>
							</tab-content>

							<!-- tab 3 content -->
							<tab-content title="Emergency Contact" class="mb-5" :before-change="validateThirdStep">
							<!-- <tab-content title="Emergency Contact" class="mb-5"> -->
								<ValidationObserver ref="thirdForm">
									<div class="container">
										<div class="vx-row">
											<div class="vx-col md:w-2/2 w-full mt-5">
												<vs-checkbox color="success" @change="formDetailsUpdate" v-model="emergencyDetails" id="user_sponsor">Use Sponsor's Details</vs-checkbox>
											</div>

											<div class="vx-col md:w-2/2 w-full mt-5">
												<ValidationProvider  name="Emergency Name" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Emergency Contact’s Name" v-model="patients.emergency_name" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Emergency Phone Number" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Emergency Phone Number (e.g +234 12345678)" v-model="patients.emergency_phone" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Emergency Address" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Emergency Address" v-model="patients.emergency_fulladdress" class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Emergency Email" rules="required" v-slot="{ errors }">
													<vs-input placeholder="Emergency Email" v-model="patients.emergency_email"  class="w-full" />
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
										</div>
									</div>
								</ValidationObserver>
							</tab-content>

							<!-- tab 4 content -->
							<tab-content title="Subscribe" class="mb-5" :before-change="validateForthStep">
								<ValidationObserver ref="fourthForm">
									<div class="container">
										<div class="vx-row">
											
											<div class="w-full pointer">
												<vs-collapse>
													<vs-collapse-item icon-arrow="none">
														<div slot="header">
															
															<statistics-card-line
																hideChart
																class="mb-base"
																icon="UsersIcon"
																icon-right
																statistic= Home Visit
																statisticTitle="Elderly Home visit" />
														</div>
														<div class="w-full">
															<PaymentComponent :service="service" :type="patients.type" v-on:payment-details="setPaymentDetails"></PaymentComponent>
														</div>
														</vs-collapse-item>
												</vs-collapse>
											</div>

											<div class="container pointer">
												<statistics-card-line
													hideChart
													class="mb-base"
													icon="UsersIcon"
													icon-right
													statistic= Home Visit
													statisticTitle="Elderly Home visit" />
											</div>
											<div class="container">
												<statistics-card-line
													hideChart
													class="mb-base"
													icon="SmartphoneIcon"
													icon-right
													statistic= Phone Consultation
													statisticTitle="Telephone Consultation" />
											</div>
											<div class="container">
												<statistics-card-line
													hideChart
													class="mb-base"
													icon="GitPullRequestIcon"
													icon-right
													statistic= On-demand
													statisticTitle="On Demand Visit" />
											</div>
											<div class="container">
												<statistics-card-line
													hideChart
													class="mb-base"
													icon="MoreVerticalIcon"
													icon-right
													statistic= "Others"
													statisticTitle="Other Services" />
											</div>

											<!-- <div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Number of Visits" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="Visits/Month" v-model="patients.no_of_visits" @change="visitCost">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in visit" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>
											
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Duration" rules="required" v-slot="{ errors }">
													<vs-select  class="w-full select-large" placeholder="Month/Year" v-model="patients.sub_duration" @change="visitCost">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in months" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div>

											<div class="vx-col md:w-2/2 w-full mt-2">
												<div class="text-center p-4">

													<p class="p-2">AMOUNT</p>
													<h3 class="text-5xl p-2">N {{visitCostSum}}</h3>
													<p class="p-2">1 visit every month for 3 months</p>
													<vs-radio color="success" vs-value="pay_now" v-model="patients.pay_action">Pay Now</vs-radio>
													<vs-radio style="margin-left:10px;" color="success" vs-value="false" v-model="patients.payment">Pay Later</vs-radio>
												</div>
											</div>

											<div class="vx-col md:w-2/2 w-full mt-2" v-if="patients.payment === 'true'">
												<ValidationProvider  name="Duration" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="Payment methods" v-model="patients.paymentDetails.paymentMethod">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in paymentOption" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
												</ValidationProvider>
											</div> -->
										</div>
									</div>
								</ValidationObserver>
							</tab-content>

							<button class="btn-custom-prev m-2" slot="prev">BACK</button>
							<button type="primary" class="btn-custom-next m-2" slot="next">NEXT</button>
							<button type="primary" class="btn-custom-next m-2" slot="finish">FINISH</button>

						</form-wizard>
					</ValidationObserver>
				</vx-card>
			</div>
		</div>
	</div>
</template> 

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import {createPatients} from '../../../api/sponsor/patient.api'
import { MapActions, mapState } from 'vuex'
import StatisticsCardLine from '../../../components/statistics-cards/StatisticsCardLine.vue' 
import PaymentComponent from '../Components/paymentFunctionality' 

export default {
	data(){
		return {
			patients:{},
			visitCostSum: 0,
			payment:'',
			service:{},
			emergencyDetails:false,

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
				{name: '1/Month', value:1},
				{name: '2/Month', value:2},
				{name: '4/Month', value:4},
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
			],

			services:[
			]
		}
	},

	computed:{
		...mapState({
			sponsor: state => state.user.sponsor,
			email: state => state.user.sponsor.email || state.user.user.email
		})
	},

	methods:{

		formSubmitted(){
			// Dispatch CreatePatient here
			
			this.createPatient(this.generateFormData());
		},

		formDetailsUpdate() {
			if(this.emergencyDetails === true){
				this.patients = {
					emergency_name:this.sponsor.name,
					emergency_phone:this.sponsor.phone_number,
					emergency_fulladdress:this.sponsor.address,
					emergency_email:this.email,
				}
			}
			else{
				this.patients = {
					emergency_name:null,
					emergency_phone:null,
					emergency_fulladdress:null,
					emergency_email:null,
				}
			}
		},

		generateFormData(){
			const form = new FormData;
			// Add other form field
			// form.append('subscription', this.patients.no_of_visits);
			// form.append('amount', parseInt(this.visitCostSum)*100);

			// services
			// if(this.patients.type === 'single'){
			// 	form.append('service_id', 1) // TODO:: Set Service ID from API

			// }else if(this.patients.type === 'couple'){
			// 	form.append('service_id', 2)
			// }

			form.append('payer', 'patient')
			for(const key in this.patients){
				if(this.patients.hasOwnProperty(key)){
					form.append(key, this.patients[key])
				}
			}
			return form;
		},

		createPatient(patients){
			let id = this.$store.state.user.user.id;

			const data = {};
			data.id = id;
			data.data = patients
			this.$store.dispatch('createNewPatient', data)
		},

		async fetchServices(){
			const services = await this.$store.dispatch('fetchServices')
			this.services = services
 		},

		async validateFirstStep(){

			try {
				return true //await this.$refs.firstForm.validate();
			} catch (error) {
				console.log(error)
			}
						
		},
		
		async validateSecondStep(){
			try {
				return true //await this.$refs.secondForm.validate();
			} catch (error) {
				console.log(error)
			}
		},

		async validateThirdStep(){
			try {
				return true //await this.$refs.thirdForm.validate();
			} catch (error) {
				console.log(error)
			}
		},

		async validateForthStep(){

			try {
				return true //await this.$refs.fourthForm.validate();
			} catch (error) {
				console.log(error)
			}
		},

		visitCost(){

			let visits = parseInt(this.patients.no_of_visit) || 1;
			let months = parseInt(this.patients.sub_duration) || 1;
			let amount = 0;

			if(this.patients.type === 'single'){

				amount = this.services[0].amount;
			}else if(this.patients.type === 'couple'){
				amount = this.services[1].amount;
			}

			let cost = visits * amount;
			let total = cost * months;
			this.visitCostSum = total;
		
		},

		getService(e){
			this.service = this.$store.getters.getServiceByType(e)
		},
		setPaymentDetails(paymentDetails){
			console.log(paymentDetails)
			this.patients.amount = paymentDetails.visitCostSum*100
			this.patients.subscription = paymentDetails.no_of_visits
			this.patients.service_id = paymentDetails.service_id
		}
	},

	components: {
		FormWizard,
		TabContent,
		ValidationProvider, 
		ValidationObserver,
    	StatisticsCardLine,
		PaymentComponent
  	},

	created(){
		this.fetchServices()
	}

}
</script>

<style scoped>
	.btn-custom-next{
		border-radius: 22px; 
		padding: 10px;
		border:none; 
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
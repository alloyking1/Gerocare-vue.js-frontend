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
													<vs-select v-model="patients.marital_status" placeholder="Marital Status" class="w-full select-large">
														<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in status" class="w-full" />
													</vs-select>
													<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
											
											
												<div class="vx-col md:w-2/2 w-full mt-2">
													<ValidationProvider  name="Name" rules="required" v-slot="{ errors }">
														<vs-input placeholder="Full Name" v-model="patients.name" class="w-full" />
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
											

											
												<div class="vx-col md:w-2/2 w-full mt-2">
													<!-- <vs-input label="Patient Address"  v-model="patient.address" class="w-full" /> -->
													<ValidationProvider  name="Sex" rules="required" v-slot="{ errors }">
														<vs-select class="w-full select-large" placeholder="Gender" v-model="patients.sex">
															<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in gender" class="w-full" />
														</vs-select>
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
											<div class="vx-col md:w-2/2 w-full mt-2">
												<ValidationProvider  name="Number of Visits" rules="required" v-slot="{ errors }">
													<vs-select class="w-full select-large" placeholder="Visits/Month" v-model="patients.no_of_visit" @change="visitCost">
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
												<vs-radio color="success" vs-value="true" v-model="patients.payment">Pay Now</vs-radio>
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
											</div>
										</div>
									</div>
								</ValidationObserver>
							</tab-content>
							<!-- <el-button type="primary" class="btn-custom-prev" slot="prev">BACK</el-button> -->
							<button class="btn-custom-prev m-2" slot="prev">BACK</button>
							<!-- <el-button type="primary" class="btn-custom-next" slot="next">NEXT</el-button> -->
							<button type="primary" class="btn-custom-next m-2" slot="next">NEXT</button>
							<!-- <el-button type="primary" class="btn-custom-next" slot="finish">FINISH</el-button> -->
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

export default {
	data(){
		return {
			patients:{},
			visitCostSum: 0,
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
			this.createPatient(this.generateFormData());
		},

		generateFormData(){
			const form = new FormData;
			// Add other form field
			form.append('subscription', 1);
			form.append('amount', this.visitCostSum)
			form.append('secretKey', 'ajshdajksdh')
			for(const key in this.patients){
				if(this.patients.hasOwnProperty(key)){
					form.append(key, this.patients[key])
				}
			}
			return form;
		},

		createPatient(data){
			let id = this.$store.state.user.user.id;
			createPatients(id, data)
			.then(res => {
				this.$vs.loading.close()
				this.$vs.notify({title:'Success',text:`patient added successfully`,color:'warning',position:'top-right'});
			})
			.catch(err => {
          		this.$vs.loading.close()
				this.$vs.notify({title:'Error',text:`Something is wrong. Patient not created. Reload the page and try again`,color:'danger',position:'top-right'});
				console.log(err)
			})
		},

		async validateFirstStep(){

			try {
				// return await this.$refs.firstForm.validate();
			} catch (error) {
				console.log(error)
			}
			return true;
						
		},
		
		async validateSecondStep(){
			try {
				// return await this.$refs.secondForm.validate();
			} catch (error) {
				console.log(error)
			}
			return true;
		},

		async validateThirdStep(){
			try {
				// return await this.$refs.thirdForm.validate();
			} catch (error) {
				console.log(error)
			}
			return true
		},

		async validateForthStep(){

			try {
				// return await this.$refs.fourthForm.validate();
			} catch (error) {
				console.log(error)
			}
			return true
		},

		visitCost(){

			let visits = parseInt(this.patients.no_of_visit) || 1;
			let months = parseInt(this.patients.sub_duration) || 1;

			let amount = 6500;

			let cost = visits * 6500;
			let total = cost * months;
			this.visitCostSum = total;
		
		},
	},

	components: {
    FormWizard,
	TabContent,
	ValidationProvider, 
	ValidationObserver
  },

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
<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base">
				<vx-card title="Add Elderly">
					<form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
						<tab-content title="Step 1" class="mb-5">

							<!-- tab 1 content -->
							<div class="vx-row">
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Patient Name" v-model="patient.name" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Phone Number"  v-model="patient.phone_number" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Email"  v-model="patient.email" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-select v-model="patient.gender" class="w-full select-large" label="Gender">
										<vs-select-item value="Male" text="Male"  class="w-full" />
										<vs-select-item value="Female" text="Female"  class="w-full" />
									</vs-select>
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Maritus Status"  v-model="patient.marital_status" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Religion"  v-model="patient.religion" class="w-full" />
								</div>

								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Address"  v-model="patient.address" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-select v-model="patient.city" class="w-full select-large" label="City">
										<vs-select-item :value="each.value" :text="each.name"  class="w-full" v-for="(each, i) in city" :key="i" />
									</vs-select>
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="State"  v-model="patient.state" class="w-full" />
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-input type="text" label="Country"  v-model="patient.country" class="w-full" />
								</div>

								<div class="vx-col md:w-1/2 mt-5 w-full">
									<div class="flex items-start flex-col sm:flex-row">
									<!-- <img src="@/assets/images/portrait/small/avatar-s-11.jpg" class="mr-8 rounded h-24 w-24" /> -->
									<vs-avatar :src="require('@/assets/images/portrait/small/avatar-s-11.jpg')" size="90px" class="mr-4" />
									<div>
										<p class="text-lg font-medium mb-2 mt-4 sm:mt-0"></p>
										<input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*">

										<!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
										<vs-button class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button>

									</div>
									</div>
								</div>
								
							</div>
						</tab-content>

						<!-- tab 2 content -->
						<tab-content title="Step 2" class="mb-5">
							
							<div class="vx-row">
								<div class="vx-col md:w-1/2 w-full">
									<vs-input label="Emergency Name" v-model="patient.emergency_name" class="w-full mt-5" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-input label="Emergency Phone" v-model="patient.emergency_phone" class="w-full mt-5" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-input label="Emergency Email" v-model="patient.emergency_email" class="w-full mt-5" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-textarea label="Emergency Address" v-model="patient.emergency_address" class="w-full mt-5" />
								</div>
							</div>


						</tab-content>

						<!-- tab 3 content -->
						<tab-content title="Step 3" class="mb-5">
							<div class="vx-row">
								<ul class="centerx" >
									<li>
										<vs-radio v-model="radios1" vs-value="luis">Pay Now</vs-radio>
									</li>
									<li>
										<vs-radio v-model="radios1" vs-value="carols">Pay Later</vs-radio>
									</li>
								</ul>
							</div>
							<div class="vx-row">
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-select v-model="patient.city" class="w-full select-large" label="Select Service">
										<vs-select-item value="home visit" text="Elderly home visit"  class="w-full" />
									</vs-select>
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-select v-model="patient.visit" class="w-full select-large" label="Number Of Visits">
										<vs-select-item value="1" text="1 Visit/Month"  class="w-full" />
										<vs-select-item value="2" text="2 Visit/Month"  class="w-full" />
										<vs-select-item value="3" text="3 Visit/Month"  class="w-full" />
										<vs-select-item value="4" text="4 Visit/Month"  class="w-full" />
										
									</vs-select>
								</div>
								<div class="vx-col md:w-1/3 w-full mt-5">
									<vs-select v-model="patient.monthly" class="w-full select-large" label="DURATION">
										<vs-select-item value="1" text="Monthly"  class="w-full" />
										<vs-select-item value="3" text="Quaterly or 3 Months"  class="w-full" />
										<vs-select-item value="6" text="Bi-Anually or 6 Months"  class="w-full" />
										<vs-select-item value="12" text="Anually or Yearly"  class="w-full" />
									</vs-select>
								</div>
							</div>
						</tab-content>
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
			patient:{},
			city:[
				{name:'Rivers state', value:'Rivers'},
				{name:'Uyo', value:'Uyo'},
				{name:'Kalabar', value:'Kalabar'},
			],
			country:[],
		}
	},

	methods:{
		formSubmitted(){
			console.log(this.patient)
			alert('hi');
		}
	},

	components: {
    FormWizard,
    TabContent
  }
}
</script>
<template>
	<div>
		<div class="vx-row">
			<div class="vx-col w-full sm:w-2/2 md:w-2/12 lg:w-4/4 xl:w-4/12 mb-base">
				<vx-card title="Add Elderly">
					<form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Finish"	@on-complete="formSubmitted">
						<tab-content title="Step 1" class="mb-5">

							<!-- tab 1 content -->
							<div class="container">
								<div class="vx-row">
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input label="Patient Name" v-model="patient.name" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input label="Patient Address"  v-model="patient.address" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-input type="text" label="State"  v-model="patient.state" class="w-full" />
									</div>
									<div class="vx-col md:w-2/2 w-full mt-5">
										<vs-select v-model="patient.city" class="w-full select-large" label="City">
											<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in city" class="w-full" />
										</vs-select>
									</div>
								</div>
							</div>
						</tab-content>

						<!-- tab 2 content -->
						<tab-content title="Step 2" class="mb-5">
							<div class="vx-row">
								<div class="vx-col md:w-1/2 w-full">
									<vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />
									<vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />
								</div>
							</div>
						</tab-content>

						<!-- tab 3 content -->
						<tab-content title="Step 3" class="mb-5">
							<div class="vx-row">
								<div class="vx-col md:w-1/2 w-full">
									<vs-input type="number" label="Patient number" v-model="patient.phone_number" class="w-full mt-5" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-select v-model="patient.type" class="w-full select-large mt-5" label="type">
										<vs-select-item :key="index" :value="item.value" :text="item.name" v-for="(item,index) in type" class="w-full" />
									</vs-select>
								</div>
								<!-- <div class="vx-col md:w-1/2 w-full mt-5">
									<vs-select v-model="status" class="w-full select-large" label="Event Status">
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />
									</vs-select>
								</div>
								<div class="vx-col md:w-1/2 w-full md:mt-8">
									<div class="demo-alignment">
										<span>Requirements:</span>
										<div class="flex">
											<vs-checkbox>Staffing</vs-checkbox>
											<vs-checkbox>Catering</vs-checkbox>
										</div>
									</div>
								</div> -->
							</div>
						</tab-content>

						<!-- tab 4 content -->
						<tab-content title="Step 4" class="mb-5">
							<div class="vx-row">
								<div class="vx-col md:w-1/2 w-full">
									<vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />
									<vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />
								</div>
								<div class="vx-col md:w-1/2 w-full">
									<vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />
								</div>
							</div>
						</tab-content>

					</form-wizard>
				</vx-card>
			</div>
		</div>



		<div class="row">
			<div class="col-md-4">fsdfsds</div>
			<div class="col-md-4">
				<vx-card class="m-5">
					<h1>hello world</h1>
				</vx-card>
			</div>
			<div class="col-md-4">dfsd</div>
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
			type:[
				{name:'Single', value:'single'},
				{name:'Couple', value:'couple'},
			],
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
		}
	},

	components: {
    FormWizard,
    TabContent
  }
}
</script>
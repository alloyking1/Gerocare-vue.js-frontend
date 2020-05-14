<template>
    <div>
      <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base" id="div-with-loadingt">
          <vx-card title="Medical Request">
              <vs-table  pagination max-items="3" stripe search :data="users">
                  <template slot="header">
                      <h3>
                      Pending Medical Request
                      </h3>
                  </template>
                  <template slot="thead">
                      <vs-th sort-key="email">
                      Ref
                      </vs-th>
                      <vs-th sort-key="username">
                      Type
                      </vs-th>
                      <vs-th sort-key="id">
                      Description
                      </vs-th>
                      <vs-th sort-key="id">
                      Vendor
                      </vs-th>
                      <vs-th sort-key="id">
                      Amount
                      </vs-th>
                      <vs-th sort-key="id">
                      view
                      </vs-th>
                  </template>

                  <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                      <vs-td :data="data[indextr].email">
                          {{data[indextr].email}}
                      </vs-td>

                      <vs-td :data="data[indextr].username">
                          {{data[indextr].username}}
                      </vs-td>

                      <vs-td :data="data[indextr].id">
                          {{data[indextr].id}}
                      </vs-td>
                      </vs-tr>
                  </template>


              </vs-table>
          </vx-card>
          <br>
          <vx-card>
              <vs-table  pagination max-items="3" stripe search :data="users">
                  <template slot="header">
                      <h3>
                      Completed Medical Request
                      </h3>
                  </template>
                  <template slot="thead">
                      <vs-th sort-key="email">
                      Ref
                      </vs-th>
                      <vs-th sort-key="username">
                      Type
                      </vs-th>
                      <vs-th sort-key="id">
                      Description
                      </vs-th>
                      <vs-th sort-key="id">
                      Vendor
                      </vs-th>
                      <vs-th sort-key="id">
                      Amount
                      </vs-th>
                      <vs-th sort-key="id">
                      view
                      </vs-th>
                  </template>

                  <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                      <vs-td :data="data[indextr].email">
                          {{data[indextr].email}}
                      </vs-td>

                      <vs-td :data="data[indextr].username">
                          {{data[indextr].username}}
                      </vs-td>

                      <vs-td :data="data[indextr].id">
                          {{data[indextr].id}}
                      </vs-td>
                      </vs-tr>
                  </template>


              </vs-table>
          </vx-card>
        
        <!-- <vx-card title="Patients Prescriptions">
  
            <vs-collapse  :type="type" v-for="(item, i) in elderly" :key="i" >
                <vs-collapse-item  >
                    <div slot="header" v-if="item.patient">
                        <vs-list>
                          <vs-list-header :title="item.patient.name" color="success"></vs-list-header>
                            <vs-list-item title="Prescription" :subtitle="item.description">
                              <vs-chip color="warning">Date:{{item.visit_date}}</vs-chip>
                            </vs-list-item>
                        </vs-list>
                    </div>
                    <div slot="header" v-else>
                        <vs-list>
                          <vs-list-header title="Patient name not provided" color="success"></vs-list-header>
                            <vs-list-item title="Prescription" :subtitle="item.description">
                              <vs-chip color="warning">Date:{{item.visit_date}}</vs-chip>
                            </vs-list-item>
                        </vs-list>
                    </div>
                    <div class="vx-col w-full mb-base" style="margin:0 auto">
                          <vs-avatar v-if="item.patient" class="mx-auto mb-6 block" size="80px" :src="item.patient.avatar" />
                          <div class="text-center" v-if="item.patient">
                              <h4>{{item.patient.name}}</h4>
                              <p class="text-grey">{{item.patient.phone_number}}</p>
                          </div>
                          <div class="text-center" v-else>
                              <h4>Null</h4>
                              <p class="text-grey">Null</p>
                          </div>
                          <div class="mb-4 mt-base">
                              <div class="flex justify-between">
                                  <small class="font-semibold">Status</small>
                                  <small class="text-grey">100</small>
                              </div>
                              <vs-progress percent="20%" class="block mt-1 shadow-md"></vs-progress>
                          </div>
                          
                          <div class="mb-4 mt-base">
                              <div class="text-center">
                                  <small>Prescription Details</small>
                              </div>
                          </div>
                          <div class="flex justify-between flex-wrap">
                              <h6>Ref:</h6>
                              <p>{{item.reference}}</p>
                              <vs-divider />
                              <h6>visit date:</h6>
                              <p>{{item.visit_date}}</p>
                              <vs-divider />
                              <h6>Amount:</h6>
                              <p>{{item.amount}}</p>
                              <vs-divider />
                              <h6>Description:</h6>
                              <p>{{item.description|| "No description"}}</p>
                              <vs-divider />
                              <h6>type:</h6>
                              <p>{{item.type}}</p>
                              <vs-divider />
                              <h6>vendor comment:</h6>
                              <p>{{item.vendor_comment}}</p>
                              <vs-divider />
                          </div>
                          <div class="flex justify-between flex-wrap">
                              <vs-button class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">dfsdf</vs-button>
                              <vs-button class="mt-4" type="border" color="#b9b9b9">kjflkkl</vs-button>
                          </div>
                    </div>
                </vs-collapse-item>

            </vs-collapse>
        </vx-card> -->
      </div>

    </div>
</template>

<script>
import {getSponsorPrescription} from '../../../api/sponsor/sponsor.api' 

export default {
  data() {
    return {
      elderly:{},
      sponsorId:"",
      popupActive2: false,
      type:"margin",
      percent:"%",

      users:[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                }
            ]
    }
  },

  created(){
    this.sponsorId = this.$store.state.user.id;
    this.getPrescription();
  },

  methods:{
    getPrescription(){
      this.$vs.loading();
      getSponsorPrescription(this.sponsorId)
      .then(res => {
        this.$vs.loading.close();
        this.elderly = res.data.data;
        console.log(this.elderly);
      })
      .catch(err => {
        this.$vs.loading.close();
        this.$vs.notify({title:'Error',text:'Could not load prescriptions. Make sure you are connected to the internet',color:'danger',position:'top-right'});
        console.log(res);
      })
    },

    loadMore(){
      this.popupActive2 = true;
    }
  }
}
</script>
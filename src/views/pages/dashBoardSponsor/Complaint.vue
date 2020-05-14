<template>
    <div>
        <div class="vx-row">
			<div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
                <vx-card title="User Complaints/Feedbacks">
                    <small class="mb-5">Please take a few minutes to let us know about your complaints or give us feedback about our service. We appreciate you.</small>
                    <form onsubmit="return false">

						<div class="vx-col md:w-2/2 w-full mt-5">
                            <vs-input label="Subject" v-model="complaint.subject" class="w-full" />
                        </div>

                        <div class="vx-col md:w-2/2 w-full mt-5">
                            <vs-textarea v-model="complaint.comment" label="Height set to 200px" height="200px"/>
                        </div>
                        <div class="vx-col md:w-2/2 w-full mt-5 mb-5">
                            <span class="text-danger text-sm">{{error}}</span>
                        </div>


                        <vs-button @click="send" icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Send</vs-button>
                    </form>
                    
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base" id="div-with-loadingt">

                <vx-card>
                    <vs-table  pagination max-items="3" stripe search :data="users">
                        <template slot="header">
                            <h3>
                            Completed Medical Request
                            </h3>
                        </template>
                        <template slot="thead">
                            <vs-th sort-key="email">
                            Email
                            </vs-th>
                            <vs-th sort-key="username">
                            Name
                            </vs-th>
                            <vs-th sort-key="id">
                            Nro
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
                <!-- <vx-card title="All Complaints">
                    <vs-collapse  :type="type" v-for="(each, complaint) in allComplaint" :key="complaint" >
                        <vs-collapse-item >
                            <div slot="header">
                                {{each.subject}}
                            </div>
                            {{each.comment}}
                        </vs-collapse-item>

                    </vs-collapse>
			    </vx-card> -->
            </div>
		</div>
    </div>
</template>

<script>
import {createComplaint, getComplaint} from '../../../api/sponsor/complaint.api'

export default {
    data(){
        return{
            complaint:{
                subject:"",
                comment:""
            },
            error:"",
            type:"margin",
            allComplaint:{},
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
        this.fetchComplaint();
    },

    methods:{
        send(){
            if(this.complaint.subject === "" || this.complaint.comment === ""){
                this.error = "All fields are required"
            }else{
                // get user id form state
                this.$vs.loading()
                let userId = this.$store.state.user.id;
                createComplaint(userId, this.complaint)
                .then(res => {
                    this.$vs.loading.close()
                    this.$vs.notify({title:'Complaint sent successful',text:'We will get back to you shortly',color:'warning',position:'top-right'});
                })
                .catch(err => {
                    this.$vs.loading.close()
                    this.$vs.notify({title:'Error',text:'something is wrong. Reload and try again',color:'danger',position:'top-right'});
                })
            }
        },

        fetchComplaint(){
            this.$vs.loading()

            let id = this.$store.state.user.id
            getComplaint(id).
            then(res => {
                this.allComplaint = res.data.data;
                this.$vs.loading.close()
            })
        }
    }
}
</script>
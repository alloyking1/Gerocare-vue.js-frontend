<template>
    <div>
      <div class="vx-row">
        <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base">
          <vx-card title="Medical Request">
            <vs-table :data="users">

                          <template slot="thead">
                          <vs-th>Email</vs-th>
                          <vs-th>Name</vs-th>
                          <vs-th>Website</vs-th>
                          <vs-th>Nro</vs-th>
                          </template>

                          <template slot-scope="{data}">
                              <vs-tr :state="indextr == 2 || indextr == 5 ? 'success':indextr == 6 ? 'danger':null" :key="indextr" v-for="(tr, indextr) in data">

                                <vs-td :data="data[indextr].email">
                                {{ data[indextr].email }}
                                </vs-td>

                                <vs-td :data="data[indextr].username">
                                {{ data[indextr].name }}
                                </vs-td>

                                <vs-td :data="data[indextr].id">
                                {{ data[indextr].website }}
                                </vs-td>

                                <vs-td :data="data[indextr].id">
                                {{ data[indextr].id }}
                                </vs-td>
                              </vs-tr>
                          </template>

                      </vs-table>
          </vx-card>
        </div>
      </div>
        <!-- <div class="vx-row">
			<div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-4/4 xl:w-4/4 mb-base">
				<vx-card title="Completed Medical Request">
					hei
				</vx-card>
			</div>
		  </div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      indextr:[
          {email:'alloyking1@gmail.com'},
          {name:'alloyking1@gmail.com'},
          {website:'alloyking1@gmail.com'},
          {id:'alloyking1@gmail.com'},
      ]
    }
  },
}
</script>
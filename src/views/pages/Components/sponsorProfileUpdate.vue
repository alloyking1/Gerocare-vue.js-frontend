<template>
  <div>
    <div>
      <ValidationObserver ref="passwordReset">
        <form @submit.prevent="validate">
          <ValidationProvider
            name="Sponsor name"
            rules="required"
            v-slot="{ errors }"
          >
            <vs-input
              name="name"
              placeholder="Enter sponsor name"
              v-model="sponsorData.name"
              class="w-full"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="Address"
            rules="required"
            v-slot="{ errors }"
          >
            <vs-input
              name="Confirm New Password"
              placeholder="update sponsor Address"
              v-model="sponsorData.address"
              class="w-full mt-4"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="City" rules="required" v-slot="{ errors }">
            <vs-input
              name="Enter sponsor City"
              placeholder="update sponsor City"
              v-model="sponsorData.city"
              class="w-full mt-4"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="State" rules="required" v-slot="{ errors }">
            <vs-input
              name="Sponsor state"
              placeholder="Update sponsor state"
              v-model="sponsorData.state"
              class="w-full mt-4"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            name="Country"
            rules="required"
            v-slot="{ errors }"
          >
            <vs-input
              name="Sponsor Country"
              placeholder="update country"
              v-model="sponsorData.country"
              class="w-full mt-4"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="Country"
            rules="required"
            v-slot="{ errors }"
          >
            <vs-input
              name="Sponsor Country"
              placeholder="Update Phone number"
              v-model="sponsorData.phone_number"
              class="w-full mt-4"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>

          <div>
           <vs-input
              name="Sponsor Country"
              placeholder="How did you hear about us"
              v-model="sponsorData.medium"
              class="w-full mt-4"
            />
          </div>

          <div>
            <vs-upload action="https://jsonplaceholder.typicode.com/posts/" ref="img" v-on:change="sendAvatar"/>
          </div>

          <div class="p-5">
              <div class="p-5">
                  <input class="float-right authBtnCustom pl-4 pr-4 p-3" @click="postData" type="submit" value="Save" />
              </div>
          </div>

        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

import { mapState } from "vuex";
export default {
  props: ["data"],
  data() {
    return {
      detailsData: {}
    };
  },

  computed: {
    ...mapState({
      sponsor: state => state.user.sponsor
    }),

    sponsorData() {
      return { ...this.sponsor };
    }
  },

  methods: {
    async validate() {
      if (await this.$refs.passwordReset.validate()) return;
    },

    sendAvatar(e){
      console.log(this.$refs.img)
      console.log(e)
    }
,
    async postData() {
      this.$emit('popup', true)
      const data = {
        id: this.sponsor.id,
        data: this.sponsorData
      };

      try {
        this.$vs.loading();
        await this.$store.dispatch("updateProfile", data);
        this.$vs.loading.close();
        this.$vs.notify({
          title: "Profile Updated",
          text: "Sponsor profile updated successfully",
          color: "success",
          position: "top-right"
        });
      } catch (e) {
        this.$vs.loading.close();
        this.$vs.notify({
          title: "Profile Update Failed",
          text: "Something is wrong please reload and try again",
          color: "danger",
          position: "top-right"
        });
      }
    }
  },

  components: {
    ValidationProvider,
    ValidationObserver
  }
};
</script>

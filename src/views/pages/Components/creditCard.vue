<template>
    <div class="vx-col w-full sm:w-2/2 md:w-2/2 lg:w-1/3 xl:w-4/4 mb-base">
      <vx-card class="mb-2 bg-primary-gradient greet-user">
        <div class="flex justify-between flex-wrap p-1">
          <span class="card-span">{{ card.card_type }}</span>
          <span class="card-span">Delete</span>
        </div>

        <div class="flex justify-around p-2">
          <svg
            width="53"
            height="30"
            viewBox="0 0 53 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#E65252" />
            <circle cx="38" cy="15" r="15" fill="#E9BA15" />
          </svg>
          <p>XXXX - XXXX - XXXX - {{ card.last4 }}</p>
        </div>
        <div class="text-left card-span p-3 pl-5 ml-5">
          <p>MasterCard - Expires {{ card.exp_month }}/{{ card.exp_year }}</p>
          <p>Billed on the first of every month</p>
          <p>Next billing due July 01,2019</p>

          <div class="mt-4" @click="setDefaultCard(card.id)">
            <vs-radio color="dark" v-model="radios2" :vs-value="setDefault">
              <span style="color:#e48346">Set Default</span>
            </vs-radio>
          </div>
        </div>
      </vx-card>
    </div>
  
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["card"],
  data() {
    return {
      radios2: "primary"
    };
  },

  computed: {
    setDefault() {
      const color = this.card.default ? "Dark" : "primary";
      this.changeColor(color);
      return color;
    }
  },

  methods: {
    changeColor(color) {
      this.radio2 = color;
    },
    async setDefaultCard(id) {
      const payload = {};
      payload.default = 1;
      const data = {
        cardId: id,
        sponsor: this.$store.state.user.sponsor.id,
        payload
      };

      await this.$store.dispatch("setDefaultCard", data);
    }
  }
};
</script>
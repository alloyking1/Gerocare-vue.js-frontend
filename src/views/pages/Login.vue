<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img2 vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <div slot="no-body" class>
        <div class="vx-row no-gutter justify-center items-center p-3">
          <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
            <div class="p-8 login-tabs-container">
              <div class="vx-card__title mb-4 text-center p-5">
                <div class="logo center">
                  <img
                    src="@/assets/images/pages/login/gerocareLogo.svg"
                    alt="Kiwi standing on oval"
                  />
                </div>
                <h4 class="mb-4 2xl p-2">
                  <strong>Login</strong>
                </h4>
              </div>

              <div>
                <ValidationObserver ref="loginForm">
                  <form @submit.prevent="validate">
                    <ValidationProvider name="Email" rules="required" v-slot="{ errors }">
                      <vs-input
                        name="email"
                        type="email"
                        placeholder="Email"
                        v-model="user.email"
                        class="w-full"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                      <vs-input
                        type="password"
                        name="password"
                        placeholder="Password"
                        v-model="user.password"
                        class="w-full mt-4"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <div class="p-5">
                      <div class="p-5">
                        <input
                          class="float-right authBtnCustom pl-4 pr-4 p-3 submitBtn"
                          type="submit"
                          value="Login"
                        />
                      </div>

                      <div class="pt-5">
                        <div class="text-center">
                          <div class="p-3 pt-5">
                            <p class="p-2">
                              Don’t have an account?
                              <router-link to="/register">Register</router-link>
                            </p>
                          </div>
                          <div class="p-3">
                            <p class="p-2">
                              I forgot my password,
                              <router-link to="/forgot-password">Help</router-link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  data() {
    return {
      user: {},
    };
  },

  methods: {
    async validate() {
      if (await this.$refs.loginForm.validate()) await this.logIn(this.user);
    },

    async logIn(data) {
      this.$vs.loading();
      if (await this.$store.dispatch("LoginSponsor", data))
        this.$router.push({ name: "home" });
      this.$vs.loading.close();
    },
  },

  components: {
    ValidationProvider,
    ValidationObserver,
  },
};
</script>

<style lang="scss">
.center {
  text-align: center;
}

#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}

.login-img {
  width: 100%;
  height: auto;
}

.bg-img2 {
  /* background-image: url("../../assets/images/pages/green_bg.jpg"); */
  // background-image: linear-gradient(to bottom right, #fff0, #17c96400);
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.submitBtn {
  font-weight: bold;
}
</style>

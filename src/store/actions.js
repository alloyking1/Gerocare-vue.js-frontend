/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import PatientRepository from "../api/patients/PatientRepository";
import SubscriptionRepository from "../api/patients/SubscriptionRepository";
import complaint from "../api/sponsor/complaint.api";
import auth from "../api/auth.api";
import {
  getSponsorPrescription,
  getSponsorAppointment,
  updateSponsor,
  passwordReset
} from "../api/sponsor/sponsor.api";

const actions = {
  // Vertical NavMenu
  updateVerticalNavMenuWidth({ commit }, width) {
    commit("UPDATE_VERTICAL_NAV_MENU_WIDTH", width);
  },

  // VxAutoSuggest
  updateStarredPage({ commit }, payload) {
    commit("UPDATE_STARRED_PAGE", payload);
  },

  // The Navbar
  arrangeStarredPagesLimited({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_LIMITED", list);
  },
  arrangeStarredPagesMore({ commit }, list) {
    commit("ARRANGE_STARRED_PAGES_MORE", list);
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({ commit }) {
    commit("TOGGLE_CONTENT_OVERLAY");
  },
  updateTheme({ commit }, val) {
    commit("UPDATE_THEME", val);
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  async updateUserInfo({ commit }, payload) {
    const res = await auth.login(payload);
    commit("UPDATE_USER_INFO", res.data);
    return res;
  },

  async registerSponsor(ctx, payload) {
    const res = await auth.register(payload);
    return res;
  },

  /**Logout */
  async LogOutIcon() {
    const res = await auth.logOut();
    return res;
  },

  /**forgot password request */
  async forgetPassword({ commit }, payload) {
    const res = await auth.passwordReset(payload);
    return res;
  },

  /**password reset */
  async resetPassword({ commit }, payload) {
    const res = await auth.RequestNewReset(payload);
    return res;
  },

  /**token refresh action */
  async refreshTokenAction({ commit }, data) {
    const res = await auth.TokenRefresh(data);
    // localStorage.removeItem('key')
    // this.replaceState({})
    if (res.data) {
      commit("UPDATE_USER_INFO", res.data);
      console.log(res.data);
    }
    return res;
  },

  updateSponsorInfo({ commit }, payload) {
    commit("UPDATE_SPONSOR_INFO", payload);
  },

  /**create a new patient */
  async createNewPatient({ commit }, { id, data }) {
    const res = await PatientRepository.create(id, data);
    commit("UPDATE_PATIENT_INFO", data); //commit to state
    if (!Array.isArray(res)) {
      window.open(res.data);
    } else {
      return res;
    }
  },

  /** */
  async fetchServices({ commit }) {
    const res = await PatientRepository.fetchServices();
    if (res.data) {
      commit("UPDATE_SERVICES_INFO", res.data);
      return res.data.data;
    }
  },

  /**create a new subscription */
  async createSubscription({ commit }, { id, data }) {
    const res = await SubscriptionRepository.createSubscription(id, data);
    // commit('UPDATE_SUBSCRIPTION_INFO', data) //commti the changes
    if (Array.isArray(res)) {
      return res;
    } else {
      window.open(res.data);
    }
  },

  async fetchMedRequest({ commit }, { id }) {
    const res = await getSponsorPrescription(id);
    commit("UPDATE_MEDREQUEST_INFO", res.data.data);
    return res;
  },

  /** fetch sponsor's visit */
  async fetchRecentVisit({ commit }, id) {
    const res = await getSponsorAppointment(id);
    commit("UPDATE_APPOINTMENT_INFO", res.data.data);
    return res;
  },

  /** fetch sponsor's visit */
  async fetchSubscriptions({ commit, state }) {
    const id = state.user.user.id;
    const res = await SubscriptionRepository.fetchSubscriptions(id);
    const { data } = res.data;
    if (data) {
      //Check for Subscription with Teleconsultation
      const teleconsultations = data.filter(subscription => {
        return subscription.service.code == "GC-HV-01"; //TODO: Get Code from .env
      });

      if (teleconsultations) {
        commit("UPDATE_TELECONSULTATION", data);
      }

      //Check for Subscription with ON-Demand
      const on_demands = data.filter(subscription => {
        return subscription.service.code == "GC-HV-02"; //TODO: Get Code from .env
      });

      if (on_demands) {
        commit("UPDATE_ON_DEMAND", data);
      }

      commit("SUBSCRIPTIONS", data);
    }
    return res;
  },

  /**make complaints */
  async createComplaint({ commit }, { id, data }) {
    const res = await complaint.createComplaint(id, data);
    commit("UPDATE_COMPLAINT_INFO", res.data.data);
    return res;
  },

  /**fetch all complaints from db */
  async fetchComplaint({ commit }, { id }) {
    const res = await complaint.getComplaint(id);
    //commit
    commit("UPDATE_COMPLAINT_INFO", res.data.data);
    return res;
  },

  /**sponsor profile update */
  async updateProfile({ commit }, { id, data: data1 }) {
    const res = await updateSponsor(id, data1);
    const { data } = res.data;
    commit("UPDATE_SPONSOR_PROFILE", data);
    return res;
  },

  /**change password */
  async updatePassword(ctx, data) {
    return await passwordReset(data);
  }
};

export default actions;

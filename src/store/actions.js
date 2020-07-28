/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import PatientRepository from "../api/patients/PatientRepository";
import { deletePatient, editPatient } from "../api/sponsor/patient.api";
import SubscriptionRepository from "../api/patients/SubscriptionRepository";
import complaint from "../api/sponsor/complaint.api";
import auth from "../api/auth.api";
import {
  getSponsorPrescription,
  getSponsorAppointment,
  updateSponsor,
  passwordReset,
  transactions,
  allCards,
  setDefaultCard,
  sponsorBillings,
  fundWallet
} from "../api/sponsor/sponsor.api";
import router from "../router";

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

  async LoginSponsor({ commit }, payload) {
    try{
      const res = await auth.login(payload);
      commit("UPDATE_USER_INFO", res.data);
      return res;
    }catch(e){
      if(e.message != "Request failed with status code 401" ){
        this._vm.$vs.notify({title:"Network Error",
        text:"You have a network error. make sure you are connected to the internet", 
        color:"danger", position:"top-right"})
        return 
      }else{
        this._vm.$vs.notify({title:"Invalid Details",
        text:"Your email and password does not match.", 
        color:"danger", position:"top-right"})
        return 
      }
    }
  },

  async registerSponsor({dispatch}, payload) {
    try{
      await auth.register(payload);
      const loginPayload = {}
      loginPayload.email = payload.email
      loginPayload.password = payload.password
      try{
        await dispatch("LoginSponsor", loginPayload) //log user in 
        router.push('/elderly/add')
        this._vm.$vs.notify({title:'Hey! Welcome', text:'Account created successfull. You can add an elderly now.', color:'success', position:'top-right'})
      }catch(e){
        this._vm.$vs.notify({title:'Network Error', text:'Hey! network error. Account created but login. Make sure you have an active internet connection', color:'danger', position:'top-right'})
      }
    }catch(e){
      this._vm.$vs.notify({title:'Network Error', text:"Hey! something went wrong and your registration could not be completed. Make sure you are connect to the internet", color:'warning',position:'top-right'})
    }
  },

  /**Logout */
  async Logout() {
    await auth.logOut();
    localStorage.removeItem("key");
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

  async deleteMedRequest({commit}, id){
    commit ("UPDATE_MEDREQUEST", id) // add endpoint later
    return false
  },

  /** fetch sponsor's visit */
  async fetchRecentVisit({ commit }, id) {
    const res = await getSponsorAppointment(id);
    commit("UPDATE_APPOINTMENT_INFO", res.data.data);
    return res;
  },

  /** fetch sponsor's visit */
  async fetchSubscriptions({ commit, state }) {
    const id = state.user.sponsor.id;
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

  /**delete complaint */
  async deleteComplaint({commit}, id){
    commit("DELETE_COMPLAINT", id)
  },

  /**fetch all complaints from db */
  async fetchComplaint({ commit },  id ) {
    const res = await complaint.getComplaint(id);
    commit("FETCH_COMPLAINT_UPDATE", res.data.data);
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
  },

  /**Delete elderly */
  async deleteBeneficiary({ commit }, { id, patientId }) {
    const res = await deletePatient(id, patientId);
    if (res) {
      commit("UPDATE_ELDERLY_STATE", patientId);
    }
  },

  /**Edit elderly */
  async editElderly({ commit }, { id, patientId, detail }) {
    try {
      const res = await editPatient(id, patientId, detail);
      commit("UPDATE_EDITED_BENEFICIARY", res.data.data);
      return res.data.data;
    } catch (e) {
      this._vm.$vs.notify({title:'Edit Elderly Network Error', text:e, color:'warning',position:'top-right'})
    }
  },

  async fetchTransactions({ commit }, { id }) {
    try {
      const response = await transactions(id);
      commit("UPDATE_TRANSACTION", response.data.data);
      return response;
    } catch (e) {
      this._vm.$vs.notify({title:'Transactions Network Error', text:e, color:'warning',position:'top-right'})
      // return err
    }
  },

  async fetchCards({ commit }, id) {
    const res = await allCards(id);
    commit("SAVE_SPONSOR_CARD", res.data);

    return res;
  },


  /**download action */
  async downloadSponsorData(ctx, {id, type}){
    await SubscriptionRepository.downloadDetails(id,type)
  },

  /**Set card to default */
  async setDefaultCard({commit}, data){
    const res =  await setDefaultCard(data)
    // commit('UPDATE_DEFAULT_CARD', res.data)
    console.log(res.data)
    return res
  },

  async billingsPayment({commit}, {id, data}){
    try{
      const res =  await sponsorBillings(id, data)
      commit('UPDATE_BILLING', res.data)
      return res
    }catch(err){
      this._vm.$vs.notify({title:'Network Error', text:'Make sure you have an action internet connection', color:'danger',position:'top-right'})
      // return err
    }
  },

  async fundWallet({commit}, {id,data}){
    try{
      const res = await fundWallet(id, data)

      if(res.data.status === true){
        window.open(res.data.data.authorization_url)
      }else{
        commit("UPDATE_WALLET", res.data.wallet_balance)
      }

      return res

    }catch{
      this._vm.$vs.notify({title:'Error', text:'Make sure you have an action internet connection', color:'danger',position:'top-right'})
      return false
    }
    
  }

  /***re-useable action for post request */
  // async postRequest({commit}, {id, data}, endpoint,){
  //   return await endpoint(id, data)
  // }
};

export default actions;

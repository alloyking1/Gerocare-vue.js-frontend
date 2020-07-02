/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// added so later we can keep breakpoint in sync automatically using this config file
// import tailwindConfig from "../../tailwind.config.js"

const getters = {
  // COMPONENT
  // vx-autosuggest
  // starredPages: state => state.navbarSearchAndPinList.data.filter((page) => page.highlightAction),
  windowBreakPoint: state => {
    // This should be same as tailwind. So, it stays in sync with tailwind utility classes
    if (state.windowWidth >= 1200) return "xl";
    else if (state.windowWidth >= 992) return "lg";
    else if (state.windowWidth >= 768) return "md";
    else if (state.windowWidth >= 576) return "sm";
    else return "xs";
  },

  scrollbarTag: state => {
    return state.is_touch_device ? "div" : "VuePerfectScrollbar";
  },

  findElderly: state => {
    return "testing";
  },

  DeleteElderly: (state) => (id) => {
    const elderly = state.user.sponsor.patient.find(patient => patient.id === id)
    elderly.delete(elderly)
    return "deleted" 
  },

  getElderlyById: state => id => {
    return state.user.sponsor.patients.find(patient => patient.id === id);
  },


  getServiceByType: (state) => (type) => {

    if (type === 'couple') {
      return state.services.data.find(service => service.code === 'GC-HV-02')
    } else if (type === 'single') {
      return state.services.data.find(service => service.code === 'GC-HV-01')
    }


  },

  getServiceById: (state) => (id) => {
    return state.services.data.find(service => service.id === id)
  },

  getMedRequestById: state => id => {
    return state.medical_requests.find(
      medical_request => medical_request.id === id
    );
  },

  getAppointmentById: (state) => (id) => {
    return state.appointments.find(appointment => appointment.id === id)
  },

  getComplaintById: (state) => (id) => {
    return state.complaint.find(complaint => complaint.id === id)
  },

};

export default getters;

/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {


  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu

  TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
    state.isVerticalNavMenuActive = value
  },
  TOGGLE_REDUCE_BUTTON(state, val) {
    state.reduceButton = val
  },
  UPDATE_MAIN_LAYOUT_TYPE(state, val) {
    state.mainLayoutType = val
  },
  UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
    state.verticalNavMenuItemsMin = val
  },
  UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
    state.verticalNavMenuWidth = width
  },


  // VxAutoSuggest

  UPDATE_STARRED_PAGE(state, payload) {

    // find item index in search list state
    const index = state.navbarSearchAndPinList["pages"].data.findIndex((item) => item.url == payload.url)

    // update the main list
    state.navbarSearchAndPinList["pages"].data[index].is_bookmarked = payload.val

    // if val is true add it to starred else remove
    if (payload.val) {
      state.starredPages.push(state.navbarSearchAndPinList["pages"].data[index])
    }
    else {
      // find item index from starred pages
      const index = state.starredPages.findIndex((item) => item.url == payload.url)

      // remove item using index
      state.starredPages.splice(index, 1)
    }
  },

  // Navbar-Vertical

  ARRANGE_STARRED_PAGES_LIMITED(state, list) {
    const starredPagesMore = state.starredPages.slice(10)
    state.starredPages     = list.concat(starredPagesMore)
  },
  ARRANGE_STARRED_PAGES_MORE(state, list) {
    let downToUp                 = false
    let lastItemInStarredLimited = state.starredPages[10]
    const starredPagesLimited    = state.starredPages.slice(0, 10)
    state.starredPages           = starredPagesLimited.concat(list)

    state.starredPages.slice(0, 10).map((i) => {
      if (list.indexOf(i) > -1) downToUp = true
    })

    if (!downToUp) {
      state.starredPages.splice(10, 0, lastItemInStarredLimited)
    }
  },


  // ////////////////////////////////////////////
  // UI
  // ////////////////////////////////////////////

  TOGGLE_CONTENT_OVERLAY(state, val) { state.bodyOverlay       = val   },
  UPDATE_PRIMARY_COLOR(state, val)   { state.themePrimaryColor = val   },
  UPDATE_THEME(state, val)           { state.theme             = val   },
  UPDATE_WINDOW_WIDTH(state, width)  { state.windowWidth       = width },
  UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY           = val   },


  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  UPDATE_USER_INFO(state, payload) {

    
    localStorage.setItem("key", payload.access_token)
    localStorage.setItem("refresh_token", payload.refresh_token)
    state.user = payload;
  },

  UPDATE_SPONSOR_INFO(state, payload) {
    state.sponsor = payload;
  },

  UPDATE_SERVICES_INFO(state, payload) {
    state.services = payload;
  },

  UPDATE_MEDREQUEST_INFO(state, payload) {
    state.medical_requests = payload;
  },

  SUBSCRIPTIONS(state, payload) {
    state.subscriptions = payload;
  },


  UPDATE_APPOINTMENT_INFO(state, payload) {
    const upcoming = payload.filter(appointment => {
      return appointment.status === 'UPCOMING'
    });

    const precious = payload.filter(appointment => {
      return appointment.status === 'PREVIOUS'
    });

    const booking = payload.filter(appointment => {
      return appointment.status === 'BOOKINGS'
    });

    state.appointments = payload;
    state.upcomingAppointments = upcoming;
    state.previousAppointments = precious;
    state.bookingAppointments = booking;

  },

  UPDATE_PATIENT_INFO(state, payload){
    state.user.sponsor.patients = payload
  },

  UPDATE_COMPLAINT_INFO(state, payload){
    state.complaint = payload
  }

}

export default mutations


/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from '../../../../store/chat/moduleChatState.js'
import mutations from '../../../../store/chat/moduleChatMutations.js'
import actions from '../../../../store/chat/moduleChatActions.js'
import getters from '../../../../store/chat/moduleChatGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

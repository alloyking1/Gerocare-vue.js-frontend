<template>
  <!-- <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo"> -->
  <div class="the-navbar__user-meta flex items-center">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo }}</p>
      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <!-- <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" /> -->
        <img key="onlineImg" :src="profile_pix" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import {logOut} from '../../../../api/auth.api'

export default {
  data() {
    return {
      profile_pix:'@/assets/images/portrait/small/avatar-s-11.jpg',

    }
  },
  computed: {
    activeUserInfo() {
      // return this.$store.state.AppActiveUser
      // return this.user_name = this.$store.state.user.name;
      return this.$store.state.user.name;
    }
  },

  methods: {
    logout() {
      logOut()
      .then(res => {
        console.log(res.response);
        localStorage.removeItem('key');
        location.reload();
        alert('logged out');
        this.$router.push('/pages/login');
      })
      .catch(err =>{
        console.log(err.message)
        if(err.message === 'Request failed with status code 401'){
          localStorage.removeItem('key');
          this.$router.push('/pages/login');
          // location.reload();
        }
      });
    },
  }
}
</script>

/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/home",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },

  // {
  //   url: null,
  //   name: 'Beneficiary',
  //   icon: 'UserIcon',
  //   i18n: 'BriefcaseIcon',
  //   submenu: [
  //     {
  //       url: '/elderly/add',
  //       name: 'Add Elderly',
  //       slug: 'app-user-list',
  //       i18n: 'List'
  //     },
  //     {
  //       url: '/elderly/all',
  //       name: 'All Elderly',
  //       slug: 'app-user-view',
  //       i18n: 'View'
  //     }
  //   ]
  // },

  {
    url: "/elderly/all",
    name: "Beneficiary",
    slug: "Appointment",
    icon: "UserIcon",
  },
  {
    url: "/teleconsultation",
    name: "TeleConsultation",
    slug: "Appointment",
    icon: "SmartphoneIcon",
  },
  {
    url: "/appointment",
    name: "Appointment",
    slug: "Appointment",
    icon: "ClockIcon",
  },
  {
    url: "/medical/request",
    name: "Medical Requests",
    slug: "MedRequest",
    icon: "FileIcon",
  },
  {
    url: "/message",
    name: "Message",
    slug: "Message",
    icon: "MessageCircleIcon",
  },
  {
    url: "/subscription",
    name: "Subscription",
    slug: "Subscription",
    icon: "ShoppingBagIcon",
  },
  {
    url: "/complaint",
    name: "Complaint/Feedback",
    slug: "Complaint",
    icon: "BookIcon",
  },

  {
    header: 'Special Offer',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: '/specialoffer',
        name: 'Special Offer',
        slug: 'specialoffer',
        icon: 'DropletIcon',
        i18n: 'Email'
      },
    ]
  },


  {
    header: 'Account Settings',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: '/billing',
        name: 'Billing',
        slug: 'app-user-list',
        icon: 'CreditCardIcon',
        i18n: 'List'
      },
      {
        url: '/sponsor/profile',
        name: 'Account Preference',
        slug: 'Account-preference',
        i18n: 'View-account',
        icon:'SettingsIcon'
      },
      // {
      //   url: "/sponsor/profile",
      //   name: "Sponsor Profile",
      //   slug: "app-user-view",
      //   icon: "UserIcon",
      // },
    ]
  },

]

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

  {
    url: null,
    name: 'Elderly',
    icon: 'UserIcon',
    i18n: 'BriefcaseIcon',
    submenu: [
      {
        url: '/elderly/add',
        name: 'Add Elderly',
        slug: 'app-user-list',
        i18n: 'List'
      },
      {
        url: '/elderly/all',
        name: 'All Elderly',
        slug: 'app-user-view',
        i18n: 'View'
      }
    ]
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
]

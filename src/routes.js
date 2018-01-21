export default [
 
  {
    path: '/',
    name:"main",
   component: require('./main.vue'),
  },
  
  
 
  {
    path: '/register/',
     name:"register",
    component: require('./assets/vue/pages/register.vue'),
    meta: {auth:false}
  },
  {
    path: '/login/',
     name:"login",
    component: require('./assets/vue/pages/login.vue'),
    meta: {auth:false}
  },
  {
    path: '/home/',
     name:"home",
    component: require('./assets/vue/pages/home.vue'),
    meta: {auth:false}
  },
  {
    path: '/userProfile/',
     name:"userProfile",
    component: require('./assets/vue/pages/userProfile.vue'),
  },
  {
    path: '/autoInfo/',
     name:"autoInfo",
    component: require('./assets/vue/pages/autoInfo.vue'),
  },

  {
    path: '/error/',
     name:"error",
    component: require('./assets/vue/pages/error.vue'),
  },
  
  
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }

]

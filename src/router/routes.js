
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Welcome.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },

  { path: '/signup', component: () => import('pages/Signup.vue') },
  { path: '/signin', component: () => import('pages/Signin.vue') },
  { path: '/home', component: () => import('components/Home.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

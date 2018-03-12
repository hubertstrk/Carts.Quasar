
export default [
  {
    path: '/',
    component: () => import('layouts/default')
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]

import appLayout from 'layouts/appLayout'
import items from 'pages/items'
import addCart from 'pages/addCart'
import settings from 'pages/settings'

export default [
  {
    path: '/',
    component: appLayout,
    children: [
      { path: 'items', component: items },
      { path: 'addCart', component: addCart },
      { path: 'settings', component: settings }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]

import signUp from '@/pages/signUp'
import homePage from '@/pages/homePage'

const routes = [
    { path: '/', name: 'home', component: homePage },
    { path: '/signup', name: 'signup', component: signUp },
  ]

export default routes;
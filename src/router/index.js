import routes from './routes'
import Router from 'vue-router'

const router = new Router({
    routes: routes,
    mode: 'history'
})

export default router
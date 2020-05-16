import Vue from "vue"
import vurRouter from 'vue-router'

Vue.use(vurRouter)
import login from '@/views/login'
import layout from '@/views/layout'

const router = new vurRouter({
    routes: [
        {path:'/login',component:login},
        {path:'/layout',component:layout},
        {path:'/',redirect:'/login'}
    ]
})

export default router
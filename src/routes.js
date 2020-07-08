import User from './pages/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './pages/Home.vue'
import Signup from './pages/Signup.vue'
import Login from './pages/Login.vue'
import Adventures from './pages/Adventures.vue'
import Explore from './pages/Explore.vue'
import Gear from './pages/Gear.vue'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/login', component: Login, name: 'login' },
    {
        path: '/user', component: User, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, props: true },
            { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' },
        ]
    },
    { path: '/explore', component: Explore, name: 'explore' },
    { path: '/adventures', component: Adventures, name: 'adventures' },
    { path: '/gear', component: Gear, name: 'gear' },
    { path: '*', redirect: '/' },
];

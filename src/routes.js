import User from './pages/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './pages/Home.vue'
import Signup from './pages/Signup.vue'
import Login from './pages/Login.vue'
import Adventures from './pages/Adventures.vue'
import AdventuresStart from './components/adventures/AdventuresStart.vue'
import Explore from './pages/Explore.vue'
import ExploreStart from './components/explore/ExploreStart'
import ExploreRegion from './components/explore/ExploreRegion.vue'
import Gear from './pages/Gear.vue'
import GearStart from './components/gear/GearStart.vue'

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
    { 
        path: '/explore', component: Explore, children: [
            { path: '', component: ExploreStart, name: 'explore' },
            { path: ':region', component: ExploreRegion, name: 'exploreRegion', props: true },
        ]
    },
    { 
        path: '/adventures', component: Adventures, children: [
            { path: '', component: AdventuresStart, name: 'adventures' },
        ]
    },
    { 
        path: '/gear', component: Gear, children: [
            { path: '', component: GearStart, name: 'gear' },
        ]
    },
    { path: '/createAdventure', component: Home, name:'createAdventure' },
    { path: '*', redirect: '/' },
];

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth, onAuthStateChanged} from "./auth"

let app;

onAuthStateChanged(auth, (user) => {
    if(user){
        store.commit("AUTH_USER", user)
    }else{
        store.commit("CLEAR_USER")
    }
    if(!app){
        app = createApp(App).use(store).use(router).mount('#app')
    }
})



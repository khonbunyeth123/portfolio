import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFacebook, FaLinkedin } from 'oh-vue-icons/icons/fa'
import { MdEmail } from 'oh-vue-icons/icons/md'

addIcons(FaFacebook, FaLinkedin, MdEmail)

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon)
app.mount("#app");
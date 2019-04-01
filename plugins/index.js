import Vue from 'vue'
import toast from '../components/toast'
if (process.browser) {
    Vue.use(toast)
}

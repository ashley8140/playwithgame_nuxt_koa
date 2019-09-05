import utils from '../assets/js/utils'
import toast from '../components/toast'

export default function({ $axios, redirect, store }) {
    store.state.login.access_token &&
        $axios.setHeader('Authorization', store.state.login.access_token)
    $axios.onRequest(config => {
        //console.log('config=>', config)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}

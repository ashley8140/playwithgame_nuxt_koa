import utils from '../assets/js/utils';
import toast from '../components/toast';

export default function({ $axios, redirect }) {
    $axios.defaults.timeout = 30000;
    $axios.defaults.auth = true;
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400');
        }
    });
}

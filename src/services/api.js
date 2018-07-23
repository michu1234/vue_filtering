import {config} from '../config'

export default {
    getProducts() {
        let api = config.development.API_URL;
        return fetch(api).then((d)=>{return d.json()})
    }
}
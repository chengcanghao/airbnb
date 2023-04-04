import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class CCHRequest {

    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use(res => { return res.data }, err => { return err })
    }


    // request(config) {
    //     return new Promise((resolve, reject) => {

    //         this.instance.request(config).then(res => {
    //             resolve(res.data)
    //         }).catch(err => {
    //             reject(err)
    //         })

    //     })
    // }
    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new CCHRequest(BASE_URL, TIMEOUT)
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-finale/us-central1/api'  //The API (Cloud Function)
})

export default instance
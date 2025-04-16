import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8080/api', // pokemon api link
    headers: {
        'Content-Type': 'application/json',
    },
})

export default client

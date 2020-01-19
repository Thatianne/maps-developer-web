import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.developer-maps.local:3333'
})

export default api;
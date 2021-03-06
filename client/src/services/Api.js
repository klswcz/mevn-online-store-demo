import axios from 'axios'
import store from '../store/index'

const api = axios.create({
  baseURL: `http://localhost:8081`
})

api.interceptors.request.use(request => {
  api.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token
  console.log(request)
  return request
})
// TODO: Authorization token is not being set for requests that are made when page is initially loading
api.interceptors.response.use(response => {
  store.commit('hideAlert')
  return response
}, res => {
  let errors = []

  if (res.response.data.errors) {
    res.response.data.errors.forEach(e => errors.push(e.msg))
  } else if (res.response.data.message) {
    errors = [res.response.data.message]
  } else {
    errors = [res.response.statusText]
  }
  store.commit('showAlert', errors)
  return Promise.reject(res)
})

export {api}

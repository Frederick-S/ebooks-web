import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_SERVER_URL

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response
  } else {
    console.error(response)

    return Promise.reject('Server error')
  }
}, (error) => {
  console.error(error)

  return Promise.reject(error.message)
})

export default axios

export default function({ app: { $axios } }) {
  $axios.defaults.baseURL = ''
  $axios.interceptors.request.use(config => {
    return config
  })
  $axios.interceptors.response.use(response => {
    if (/^[4|5]/.test(response.status)) {
      return Promise.reject(response.statusText)
    }
    const res = response.data
    if (parseInt(res.code) !== 0) {
      if (process.client) {
        alert(res.msg)
      }
      return Promise.reject(res)
    } else {
      if (Object.keys(res).includes('data')) {
        return res.data
      } else {
        return res
      }
    }
  })
}

import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
import store from '@/store/index.js'
import { errorCode } from '../../errorCode'
import { getToken, setToken } from '@/utils/token.js'

// axios配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = false

axios.interceptors.response.use((resp) => {
  // 获取到 xStreamId
  if (resp.headers['x-stream-id']) {
    const xStreamId = resp.headers['x-stream-id']
    setToken(xStreamId)
  }
  return Promise.resolve(resp.data.msg)
}, (error) => {
  if (error.response && error.response.status === 401) {
    store.commit('SET_IS_LOGIN', false)
    const curRouteName = router.currentRoute.name
    router.replace({
      name: 'login',
      params: {
        name: curRouteName,
        query: router.currentRoute.query || null
      }
    })
    return Promise.resolve({ })
  }
  const data = error.response.data
  const message = errorCode.getMsg(data)

  Toast.fail(message)
  return Promise.reject(message)
})

// 设置请求头信息
axios.interceptors.request.use(
  requestConfig => {
    const xStreamId = getToken()
    if (xStreamId) {
      requestConfig.headers['X-Stream-Id'] = xStreamId
    }
    return requestConfig
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios

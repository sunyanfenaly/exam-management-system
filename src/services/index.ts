import request from "./request"
import type { LoginParams } from '../type' 


export const getCaptcha = () => {
  return request.get('/login/captcha')
}

export const loginApi = (params: LoginParams) => {
  return request.post('/login', params)
}


export const userInfoApi = () => {
  return request.get('/user/info', {
    headers: {
      'AUTHORIZATION': localStorage.getItem('token')
    }
  })
}

export const menuListApi = () => {
  return request.get('/user/menulist', {
    headers: {
      'AUTHORIZATION': localStorage.getItem('token')
    }
  })
}


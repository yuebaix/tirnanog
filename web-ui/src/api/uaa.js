import request from '@/utils/request'

export function listUser(params) {
  return request({
    url: '/user/list',
    method: 'post',
    params
  })
}

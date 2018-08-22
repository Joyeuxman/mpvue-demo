/*
 * @Author: liguanghui 
 * @Date: 2018-08-22 21:01:31 
 * @Last Modified by:   liguanghui 
 * @Last Modified time: 2018-08-22 21:01:31 
 */

// 工具函数库

import config from './config'

export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

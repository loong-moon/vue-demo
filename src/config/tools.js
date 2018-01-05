// 工具库
// import md5 from 'blueimp-md5'

// 添加cookie
export function addCookie (name, value, expiresHours) {
  var cookieString = name + '=' + escape(value) + '; path=/'
  // 判断是否设置过期时间
  if (expiresHours > 0) {
    var date = new Date()
    date.setTime(date.getTime + expiresHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toUTCString()
  }
  document.cookie = cookieString
}

// 获取cookie
export function getCookie (name) {
  var strCookie = document.cookie
  var arrCookie = strCookie.split(';')
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split('=')
    if (arr[0] === name) return unescape(arr[1])
  }
  return ''
}

// 删除cookie
export function deleteCookie (name) {
  var date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=; path=/; expires=' + date.toUTCString()
}

// 深复制，要想达到深复制就需要用递归
export function deepCopy (o, co) {
  var c = co || {}
  for (var i in o) {
    if (typeof o[i] === 'object') {
      // 要考虑深复制问题了
      if (o[i].constructor === Array) {
        // 这是数组
        c[i] = []
      } else {
        // 这是对象
        c[i] = {}
      }
      deepCopy(o[i], c[i])
    } else {
      c[i] = o[i]
    }
  }
  return c
}

// 转换字节尺寸
export function bytesToSize (bytes, num) {
  if (bytes === 0) return '0 B'
  if (!num) {
    num = 2
  }
  var k = 1024
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toFixed(num) + ' ' + sizes[i]
}

// 格式化字符串时间
export function formatStringTime (str) {
  var time
  if (!str) return
  if (str.length === 14) {
    time = str.slice(0, 4) + '/' + str.slice(4, 6) + '/' + str.slice(6, 8) + ' ' + str.slice(8, 10) + ':' + str.slice(10, 12) + ':' + str.slice(12, 14)
  }
  return time
}

// 转换秒成为字符串
export function secondToString (secondTime) {

  var second = secondTime
  var min = '00'
  var hour = '00'
  if (second < 10) {
    second = '0' + second
  }
  var time = hour + ':' + min + ':' + second
  if (parseInt(secondTime) >= 60) {

    second = parseInt(secondTime) % 60
    min = parseInt(secondTime / 60)
    if (second < 10) {
      second = '0' + second
    }
    if (min < 10) {
      min = '0' + min
    }
    time = hour + ':' + min + ':' + second

    if (min >= 60) {
      min = parseInt(secondTime / 60) % 60
      hour = parseInt(parseInt(secondTime / 60) / 60)
      if (min < 10) {
        min = '0' + min
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      time = hour + ':' + min + ':' + second
    }
  }

  return time
}

// 计算字符串所占字节数
export function sizeof (str, charset) {
  let total = 0
  let charCode
  let i
  let len

  charset = charset ? charset.toLowerCase() : ''
  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
      }
    }
  }
  return total
}

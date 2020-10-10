/*
 *-------------------------------------------------------------
 * @File  : 常用工具类
 * @Author: QinYuanqi
 * @Email : qinyuanqiuse@gmail.com
 * @GitHub: qinyuanqiblog.github.io
 * @Date  : 2019-02-21 14:28:35
 * @Last Modified by: QinYuanqi
 * @Last Modified time: 2020-05-08 14:45:30
 *-------------------------------------------------------------
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 获取xxx天后的日期（网上抄的😃）
 * @param {number}  day   需要计算的天数
 */
export function getDay(day) {
  // Date()返回当日的日期和时间。
  var days = new Date()
  // getTime()返回 1970 年 1 月 1 日至今的毫秒数。
  var gettimes = days.getTime() + 1000 * 60 * 60 * 24 * day
  // setTime()以毫秒设置 Date 对象。
  days.setTime(gettimes)
  var year = days.getFullYear()
  var month = days.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  var today = days.getDate()
  if (today < 10) {
    today = '0' + today
  }
  return year + '-' + month + '-' + today
}

/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
export const formatDate = (date, fmt) => {
  date = date == undefined ? new Date() : date
  date = typeof date == 'number' ? new Date(date) : date
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss'
  var obj = {
    y: date.getFullYear(), // 年份，注意必须用getFullYear
    M: date.getMonth() + 1, // 月份，注意是从0-11
    d: date.getDate(), // 日期
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    w: date.getDay(), // 星期，注意是0-6
    H: date.getHours(), // 24小时制
    h: date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    m: date.getMinutes(), // 分钟
    s: date.getSeconds(), // 秒
    S: date.getMilliseconds(), // 毫秒
  }
  var week = ['天', '一', '二', '三', '四', '五', '六']
  for (var i in obj) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function(m) {
      var val = obj[i] + ''
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val]
      for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val
      return m.length == 1 ? val : val.substring(val.length - m.length)
    })
  }
  return fmt
}

/**
 * 获取特定字符的字符串
 * @param  {string}  key query中的字段
 * @param  {object}  url / url 的查选字符串，默认值是 location.search
 * @return {string}  query中的字段的对应值
 */
export const getQuery = (key, url) => {
  var search = url || location.search
  //如果查询的第一个字符是 ？  就去掉
  if (search[0] == '?') {
    search = search.substring(1)
  } else {
    search = search.split('?')[1]
  }
  // 如果 没有 ？ 就直接返回 undefined
  if (!search) {
    return undefined
  }
  var searchArr = search.split('&')
  var searchObj = {}
  var temp
  for (var i = 0, len = searchArr.length; i < len; i++) {
    temp = searchArr[i].split('=')
    if (temp[0] in searchObj) {
      if (Array.isArray(searchObj[temp[0]])) {
        searchObj[temp[0]].push(temp[1])
      } else {
        searchObj[temp[0]] = [searchObj[temp[0]], temp[1]]
      }
    } else {
      searchObj[temp[0]] = temp[1]
    }
  }
  if (typeof key === 'string') {
    return searchObj[key.trim()]
  } else {
    return searchObj
  }
}

/**
 *  数组转json
 *  eg: [{parentId:xx,name:'xx',}] ==> {parentId:[]}
 *  @param  {array} item              待处理的数组
 *  @param  {string} parentId         父级id
 *  @param  {string} childrenName     子级名字的id
 *  @return {object}                   处理好的json格式
 */
export const preciselyArrayToJson = (source = [], parentId = '', childrenName = '') => {
  if (!source) {
    console.log('请传入source~~~')
    return false
  }
  if (!parentId) {
    console.log('请传入parentId~~~')
    return false
  }

  let parentArr = Array.from(
    new Set(
      source.map(v => {
        return v[parentId]
      })
    )
  )

  let parentJson = {}
  const name = (childrenName && source.map(v => v[childrenName]).join(',')) || ''
  parentArr.map(v => {
    parentJson[v] = []
  })
  for (const item in parentJson) {
    source.map(v => {
      if (v[parentId] === item && v[childrenName]) {
        parentJson[item].push(v)
      }
    })
  }
  return {
    name,
    parentJson,
  }
}

/**
 * JSON数组去重复项
 * @param {array}  source  需要去重的JSON数组
 * @param {string} itemKey 数组中当前项的唯一标识
 */
export const uniqueArrayJson = (source, itemKey) => {
  if (!Array.isArray(source)) {
    console.log(' uniqueArrayJson ==> source必须是一个数组！！！')
    return false
  }
  let json = {}
  source = source.reduce((item, next) => {
    json[next[itemKey]] ? '' : (json[next[itemKey]] = true && item.push(next))
    return item
  }, [])
  return source
}

/**
 * 30seconds 一些数组可能需要用到的方法, 可以查看src/doc/30seconds.md cv即可
 */
export const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(el => !s.has(el))
}
export const uniqueElementsByRight = (arr, fn) => {
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v)
    return acc
  }, [])
}
// 深度展开数组，不是克隆哦，还会存在引用的情况
export const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

// import floatTool from '@/common/FloatTool.js'
import { formatDate } from '@/utils'
export default function(vue) {
  /**
   * 星星的过滤器
   * @param {string}  val        需要处理的值
   * @param {number}  start      开始的位置
   * @param {number}  end        结束的位置
   */
  vue.filter('starFilter', function(val, start, end) {
    if (!val) return ''
    return plusXing(val, start, end)
  })
  /**
   * 价钱的过滤器
   * @describe 给元带上单位
   * @param {string}  val        需要处理的值
   */
  vue.filter('moneyFilter', function(val) {
    // add / subtract / multiply /divide
    // console.log(floatTool.add(19.9, 100))
    // console.log(floatTool.subtract(19.9, 100))
    // console.log(floatTool.multiply(19.9, 100))
    // console.log(floatTool.divide(19.9, 100))
    // if (!val) return ''
    if (val === null || val === undefined || val === '') {
      return '￥0.00'
    }
    return '￥' + parseFloat(val).toFixed(2)
    // return '￥' + parseFloat(floatTool.divide(val, 100)).toFixed(2)
  })
  /**
   * 截取特定的字符串
   * @param {string}  val        需要处理的值
   * @param {number}  start      开始的位置
   * @param {number}  end        结束的位置
   */
  vue.filter('subStrFilter', function(val, start, end) {
    if (!val) return ''
    return val.substring(start, end)
  })
  /**
   * 金额转换
   * @describe 10000 => "10,000"
   * @param {string | number}  val        需要处理的值
   */
  vue.filter('toThousandMoneyFilter', function(val) {
    if (val === null || val === undefined || val === '') {
      return 0
    }
    if (typeof val === 'number' || typeof val === 'string') {
      return (+val || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    } else {
      return val
    }
  })
  /**
   * 活动模块的性别
   * @param {string | number}  val        需要处理的值
   */
  vue.filter('activitySexFilter', function(val) {
    let text = ''
    switch (val) {
      case 'MALE':
        text = '只限男'
        break
      case 'FEMALE':
        text = '只限女'
        break
      case 'ALL':
        text = '不限男女'
        break

      default:
        break
    }
    return text
  })
  /**
   * 活动模块的性别
   * @param {string | number}  val        需要处理的值
   * @param {string}  fmt        格式
   */
  vue.filter('dateFilter', function(val, fmt = 'yyyy-MM-dd HH:mm:ss') {
    let text = ''
    if (!val) {
      return ''
    }
    if (val) {
      text = formatDate(new Date(val), fmt)
      return text
    }
  })
}

/**
 * 给某段字符串加上***
 * 抄自：https://blog.csdn.net/Lpandeng/article/details/78933184
 * @param {string}  str        需要处理的值
 * @param {number}  frontLen   开始的位置
 * @param {number}  endLen     结束的位置
 */
function plusXing(str, frontLen, endLen) {
  var len = str.length - frontLen - endLen
  var xing = ''
  for (var i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}

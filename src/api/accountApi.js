// 用户账户相关接口
import request from '@/utils/request'
const defaultPrefix = '/V1.0/account'
export default {
  // 获取可提取颜币及到账金额
  getExtractInfo(data = {}) {
    return request({
      url: `${defaultPrefix}/getExtractInfo.json`,
      method: 'post',
      data,
    })
  },
  // 获取用户账户余额
  queryAccountBalance(data = {}, headers = { loadingFlag: true }) {
    return request({
      url: `${defaultPrefix}/queryAccountBalance.json`,
      method: 'post',
      headers,
      data,
    })
  },
  // 获取颜币余额(充值和收益一起的),茂安说改了，没有测过20200310
  queryFaceCoinBalance(data = {}, headers = { loadingFlag: true }) {
    return request({
      url: `${defaultPrefix}/queryFaceCoinBalance.json`,
      method: 'post',
      headers,
      data,
    })
  },
  // 获取收益颜币配置信息
  queryIncomeAccountWithdrawInfo(data = {}) {
    return request({
      url: `${defaultPrefix}/queryIncomeAccountWithdrawInfo.json`,
      method: 'post',
      data,
    })
  },
  // 获取充值颜币列表
  queryRechargeTransactionList(data = {}) {
    return request({
      url: `${defaultPrefix}/queryRechargeTransactionList.json`,
      method: 'post',
      data,
    })
  },
  // 获取收益颜币列表信息
  queryIncomeTransactionList(data = {}) {
    return request({
      url: `${defaultPrefix}/queryIncomeTransactionList.json`,
      method: 'post',
      data,
    })
  },
  // 获取推广提现配置信息
  queryRewardAccountWithdrawInfo(data = {}) {
    return request({
      url: `${defaultPrefix}/queryRewardAccountWithdrawInfo.json`,
      method: 'post',
      data,
    })
  },
  // 获取推广提现列表信息
  queryRewardTransactionList(data = {}) {
    return request({
      url: `${defaultPrefix}/queryRewardTransactionList.json`,
      method: 'post',
      data,
    })
  },
}


import request from '@/utils/request'
const defaultPrefix = '/system'
const userId = window.sessionStorage.userId
export default {
  // 添加留言
  addMessage(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/addMessage`,
      method: 'post',
      params,
    })
  },
  // 查文章列表（即栏目下的文章）， {根据栏目查, 传 栏目menuId,modelType 1，单页，2新闻，3，产品 分页：每页条数pageSize 页数pageNum } 说明：单页模型返回一条或没有，新闻模型和产品模型返回多条或没有
  articleList(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/articleList`,
      method: 'get',
      params,
    })
  },
  // 轮播图列表
  bannerList(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/bannerList/${userId}`,
      method: 'get',
      params,
    })
  },
  // 详情页数据，labelTitle 显示相关标签的名字，labelData 显示相关标签的数据，productTitle productData 相关产品，newsTitle newsData 相关新闻，up 上一篇。next 下一篇 ,currentArticle 当前查看的文章
  detailsPageData(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/detailsPageData`,
      method: 'get',
      params,
    })
  },
  // 友情链接链表
  friendlinkList(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/friendlinkList/${userId}`,
      method: 'get',
      params,
    })
  },
  // 主页数据（ 传参 userId ） 返回数据，主页面的 productAll 产品全部列表 ，newsAll 新闻的全部列表，newsClass 新闻的分类，返回一个集合，menuName 为新闻子菜单名字，newsList子菜单的新闻集合
  index(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/index`,
      method: 'get',
      params,
    })
  },
  // 基本信息
  info(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/info/${userId}`,
      method: 'get',
      params,
    })
  },
  // 内页数据，productTitle 产品中心显示的名字，productMenuData 产品中心的数据，newsTitle 新闻中心显示的名字 newsData 新闻数据，keysTitle keysData 热门关键词 自行用|分割，contactUsTitle contactUsTitle 联系我们的数据
  insidePageData(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/insidePageData`,
      method: 'get',
      params,
    })
  },
  // 获取菜单
  menuTree(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/menuTree/${userId}`,
      method: 'get',
      params,
    })
  },
  // 全站搜索，出来多个产品，或多个新闻。 参数 keyword 关键字 userId 用户id ，，结果 newsCount 新闻的条数 productCount 产品条数
  search(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/search`,
      method: 'get',
      params,
    })
  },
  // 未读留言总数，必须传的参数：所属用户 userId
  unreadMessageCount(params = {}) {
    return request({
      url: `${defaultPrefix}/news/api/unreadMessageCount`,
      method: 'get',
      params,
    })
  },


}

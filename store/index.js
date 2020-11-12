export const state = () => ({
  // 网站基本信息
  baseInfo: {},
  // 首页的数据
  indexPageData: {},
  // 子页侧栏和其他相关信息
  commonData: {},
  // 导航栏
  menuList: [],
  // 轮播图
  bannerList: [],
})

export const getters = {
  // 搜索列表
  searchList(state){
    return state.baseInfo.keyword ? state.baseInfo.keyword.split('|').slice(0, 4) : []
  },
  // 产品列表
  productListArray(state){
    return state.indexPageData.productAll ? state.indexPageData.productAll.slice(0, 9) : []
  },
  // 新闻列表列表
  websiteNewsArray(state){
    return state.indexPageData.newsClass ? state.indexPageData.newsClass : []
  },
  // 子页的侧栏
  sideBarObject(state){
    const list = []
    const res = state.commonData
    if(!res.newsTitle){
      return {}
    }
    list.push({
      title: res.productTitle,
      childrenList: (res.productMenuData && res.productMenuData.newsMenu.slice(0, 9)) || [],
      showType: 'menu',
    })
    list.push({
      title: res.newsTitle,
      childrenList: (res.newsData && res.newsData.slice(0, 9)) || [],
      showType: 'list',
    })
    const contactUsData = res.contactUsData.split('\n')
    return {
      list,
      contactUsData
    }
  },
  productUrl(state){
    let newArray = state.menuList.filter((v) => v.isProductCenter === '1')
    return  (newArray[0] && newArray[0].href) || 'index.html'
  }
}

export const mutations = {
  SET_BASE_INFO(state, data={}){
    state.baseInfo = data
  },
  SET_INDEX_PAGE_DATA(state, data={}){
    state.indexPageData = data
  },
  SET_COMMON_DATA(state, data={}){
    state.commonData = data
  },
  SET_MENU_LIST(state, data={}){
    state.menuList = data
  },
  SET_BANNER_LIST(state, data={}){
    state.bannerList = data
  },
}

import { systemApi } from '@/api'
export default {
  data() {
    return {
      baiduConfig:{
        ak:'BkqwvFyXiHg7S9Gc3GAF1lCkrHhAHXYH',
        center:{lng: 0, lat: 0},
        zoom:15,
      },
      insidePageData:{},
      companyInfo: {
        contactus:''
      },
      websiteConfig:{
        aboutUs:{
          brand:{
            content:'福滨红木家具主营越南黄花梨、大红酸枝、缅甸草花梨、小叶紫檀红木家具、豪华电动餐桌、火锅桌专业定制，是红木古典家具知名品牌。产品品种齐全、品质可靠，造型典雅高贵，定位大众市场，致力于让高档家居走进普通百姓家。本厂拥有流的技工人才。和先进的生产设备，是一家集设计开发、生产制造、销售及售后服务于一体的红木古典家具厂家。本企业精选优质名贵木材，每一件产品从设计、开料、木工、雕花、打磨再到油漆，都经过严格的操作程序，精雕细琢、典雅大方。产品主要分为客厅、餐厅、套房、书房等系列，传统与现代相结合的风格，深得广大客户依赖和喜爱。本厂秉承“为商以德、诚信为'
          }
        },
        websiteFooter:{
          address:`南宁市兴宁区昆仑大道2号南宁花鸟市场
          B区玉A区10-11-12号<br/>
          厂址一:南宁林科院邓氏工艺厂旁边66号<br/>
          厂址二:江门市新会福滨古典红木家具厂明朝大道128号`,
        }
      }
    }
  },
  mounted() {
    this.commonInit()
  },
  methods: {
    commonInit(){
      this.getBaseInfo()
      this.getInsidePageData()
    },
    getBaseInfo() {
      systemApi.info().then((res = {}) => {
        const info = res.info || {}
        info.address = this.websiteConfig.websiteFooter.address
        info.address = this.websiteConfig.websiteFooter.address
        info.address = this.websiteConfig.websiteFooter.address

        if(this.$refs.websiteHeader){
          this.$refs.websiteHeader.companyInfo = info
        }
        if( this.$refs.searchBox){
          this.$refs.searchBox.list = (res.info.keyword &&info.keyword.split('|').splice(0, 4)) || []
        }
        if( this.$refs.faithIntroduce){
          this.$refs.faithIntroduce.config = info
        }
        if(this.$refs.aboutUs){
          this.$refs.aboutUs.brand = {
            title: info.name,
            content: this.websiteConfig.aboutUs.brand.content
          }
        }
        if(this.$refs.websiteFooter){
          this.$refs.websiteFooter.baseInfo = info || {}
        }
        if(this.$refs.websiteNews){
          this.$refs.websiteNews.contact = res || []
        }
        if(this.$refs.contactDialog){
          this.$refs.contactDialog.config = info
        }
        this.companyInfo = info
        // 创建meta
        const headEl = document.querySelector('head')
        const viewportEl = document.querySelector('#viewport')
        const keywordEl = document.createElement('meta')
        keywordEl.name = 'keywords'
        keywordEl.content = info.seoKeywords
        const descEl = document.createElement('meta')
        descEl.name = 'description'
        descEl.content = info.seoDescription
        document.title = info.seoTitle || info.name
        headEl.insertBefore(keywordEl, viewportEl)
        headEl.insertBefore(descEl, viewportEl)
      })
    },
    getInsidePageData() {
      systemApi.insidePageData().then((res = {}) => {
        this.insidePageData = res
        if(this.$refs.websiteSideBar){
          const list = []
          list.push({
            title: res.productTitle,
            childrenList: (res.productMenuData && res.productMenuData.newsMenu.splice(0, 9)) || [],
            showType: 'menu',
          })
          list.push({
            title: res.newsTitle,
            childrenList: (res.newsData && res.newsData.splice(0, 9)) || [],
            showType: 'list',
          })
          this.$refs.websiteSideBar.list = list
          this.$refs.websiteSideBar.contactUsData = res.contactUsData.split('\n')
        }

      })
    },
    baiduReady () {
      this.baiduConfig.center.lng = this.companyInfo.longitude
      this.baiduConfig.center.lat = this.companyInfo.latitude
      // this.baiduConfig.center.lng = 116.404
      // this.baiduConfig.center.lat = 39.915
      // this.zoom = 15
    }
  },
}
